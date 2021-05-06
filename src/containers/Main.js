import React, {Component, Fragment} from 'react';
import styles from './Main.module.css';
import store from  '../redux/store';

class Main extends Component{
constructor(props){
    super(props);
    
    this.onClickHandler = this.onClickHandler.bind(this);
    this.timer = this.timer.bind(this);
    this.reset = this.reset.bind(this);
}
onClickHandler(command){
    if(command === "break-increment"){
        store.dispatch({
            type: "INCREMENT-BREAK"
        })
        document.getElementById("break-length").innerHTML = store.getState().startBreakTime;
    }else if(command === "break-decrement"){
        store.dispatch({
            type: "DECREMENT-BREAK"
        })
        document.getElementById("break-length").innerHTML = store.getState().startBreakTime;
    }else if(command === "session-increment"){
        store.dispatch({
            type: "INCREMENT-SESSION"
        })
        document.getElementById("session-length").innerHTML = store.getState().startSessionTime;
    }else if(command === "session-decrement"){
        store.dispatch({
            type: "DECREMENT-SESSION"
        })
        document.getElementById("session-length").innerHTML = store.getState().startSessionTime;
    }

}

timer(){

        store.dispatch({
            type: "STOP"
        })
        
        var interval = setInterval(() => {
            if(store.getState().stop === false){
            store.dispatch({
                type: "DECREMENT-SECONDS"

            })
            if(store.getState().timer === false){
                document.getElementById("timer-label").innerHTML = "Session";
            }else{
                document.getElementById("timer-label").innerHTML = "Break";
            }
            if(store.getState().minutes === 0 && store.getState().seconds === 0){
                
                return(
                    document.getElementById("beep").play(),
                    store.dispatch({
                        type : "TOGGLE-TIMER"
                    }))
               
            }
            if(store.getState().seconds === 60 || store.getState().seconds === 0 ){
               return(
                store.dispatch({
                    type: "DECREMENT-MINUTES"
                })
           
               )}
            if(store.getState().timer === false){
                document.getElementById("timer-label").innerHTML = "Session";
            }else{
                document.getElementById("timer-label").innerHTML = "Break";
            }
            document.getElementById("time-left").innerHTML = store.getState().minutes + ":" + store.getState().seconds;
        }else{
            clearInterval(interval);
        }
        }, 1000);
   
   
}
reset(){
store.dispatch({
    type:"RESET"
})
document.getElementById("time-left").innerHTML = store.getState().minutes + ":" + "00";
document.getElementById("break-length").innerHTML = store.getState().startBreakTime;
document.getElementById("session-length").innerHTML = store.getState().startSessionTime;
this.timer();
}
render(){
    return(
        <Fragment>
            <div id="box" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",height:"700px",fontSize:"30px",color:"cadetblue"}}>
                <h1 id="heading" style ={{margin:"0 auto"}}><span style={{color:"#c74747",textDecoration:"underline"}}>25+5 </span>Clock</h1>
                <div id="controls" style={{display:"flex",flexDirection: "row",margin:"0 auto"}}>
                    <div id="break" style={{margin:"50px 50px",textAlign:"center"}}>
                        <div id="break-label">Break Length</div>
                        <div id="break-length" style={{color:"#c74747"}}>{store.getState().startBreakTime}</div>
                        <button id ="break-decrement" onClick = {() => this.onClickHandler("break-decrement")}>Decrement</button>
                        <button id="break-increment" onClick = {() => this.onClickHandler("break-increment")}>Increment</button>
                    </div>
                    <div id="session"  style={{margin:"50px 50px",textAlign:"center"}}>
                        <div id="session-label">Session Length</div>
                        <div id="session-length" style={{color:"#c74747"}}>{store.getState().startSessionTime}</div>
                        <button id="session-decrement" onClick = {() => this.onClickHandler("session-decrement")}>Decrement</button>
                        <button id="session-increment" onClick = {() => this.onClickHandler("session-increment")}>Increment</button>
                       
                    </div>
                </div>
                <div id="timer" style={{margin:"0 auto",textAlign:"center",border:"1px solid cadetblue",borderRadius:"10px",width:"200px"}}>
                    <div id="timer-label"></div>
                    <div id="time-left" style = {{color:"#c74747"}}>25:00</div>
                </div>
                <div id="settings" style={{margin:"50px auto"}}>
                    <button id="start-stop" onClick = {this.timer}>Start/Stop</button>
                    <button id ="reset" onClick= {this.reset } >Reset</button>
                    
                </div>
                <audio id="beep">
                    <source src="beep.mp3" type="audio/mpeg"/>
                </audio>
            </div>
        </Fragment>

    )
}

}
export default Main;