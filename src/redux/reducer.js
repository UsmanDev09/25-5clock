
const reducer = (state , action)  => {
    switch (action.type) {
        case "setTime":
            return({
                startBreakTime : action.startBreakTime,
                startSessionTime : action.startSessionTime,
                seconds: action.seconds,
                minutes: action.startSessionTime,
                timer : action.breakTimer,
                stop: action.stop
            })
              
        case "INCREMENT-BREAK":
            if(state.startBreakTime >= 1 && state.startBreakTime < 60){
                if(state.timer === false){            
                    return ({
                        startBreakTime: state.startBreakTime + 1,
                        startSessionTime : state.startSessionTime,
                        minutes : state.startSessionTime,
                        seconds:61,
                        stop: false
                    })
                }else {
                    return ({
                        startBreakTime: state.startBreakTime + 1,
                        startSessionTime : state.startSessionTime,
                        minutes : state.startBreakTime,
                        seconds: 61,
                        stop: false
                    })
                }
            }else {
                return ({
                    startBreakTime: state.startBreakTime,
                    startSessionTime : state.startSessionTime,
                    minutes : state.startSessionTime,
                    seconds:61,
                    stop: false
                })
            }

        case "INCREMENT-SESSION":
            if(state.startSessionTime >= 1 && state.startSessionTime < 60){            
                return ({
                    startBreakTime: state.startBreakTime,
                    startSessionTime : state.startSessionTime + 1,
                    minutes : state.startSessionTime +1,
                    seconds:61,
                    stop: false
                })
            }else {
                return ({
                    startBreakTime: state.startBreakTime,
                    startSessionTime : state.startSessionTime,
                    minutes : state.startSessionTime,
                    seconds:61,
                    stop: false
                })
            }

        case "DECREMENT-BREAK":
            if(state.startBreakTime > 1 && state.startBreakTime <= 60){   
                if(state.timer === false){         
                    return ({
                        startBreakTime: state.startBreakTime - 1,
                        startSessionTime : state.startSessionTime,
                        minutes : state.startSessionTime -1,
                        seconds:61,
                        stop: false
                    })}
                else{
                    return({
                        startBreakTime: state.startBreakTime - 1,
                        startSessionTime : state.startSessionTime,
                        minutes : state.startBreakTime -1,
                        seconds:61,
                        stop: false
                    })
                }
            }else {
                return ({
                    startBreakTime: state.startBreakTime,
                    startSessionTime : state.startSessionTime,
                    seconds:61,
                    stop: false
                })
            }
            
        case "DECREMENT-SESSION":
            if(state.startSessionTime > 1 && state.startSessionTime <= 60){   
                if(state.timer === false){         
                    return ({
                        startBreakTime: state.startBreakTime ,
                        startSessionTime : state.startSessionTime-1,
                        minutes : state.startSessionTime-1,
                        seconds:61,
                        timer:false,
                        stop: false
                    })}
                else{
                    return({
                        startBreakTime: state.startBreakTime ,
                        startSessionTime : state.startSessionTime-1,
                        minutes : state.startSessionTime,
                        seconds:61,
                        timer: true,
                        stop: false
                    })
                }
            }else {
                return ({
                    startBreakTime: state.startBreakTime,
                    startSessionTime : state.startSessionTime,
                    seconds:60,
                    stop: false
                })
            }
        case  "DECREMENT-SECONDS":
            return({
                seconds: state.seconds -1 ,
                minutes : state.minutes,
                startBreakTime: state.startBreakTime,
                startSessionTime : state.startSessionTime,
                timer: state.timer,
                stop: false
            })
        case "DECREMENT-MINUTES":
            return({
                minutes : state.minutes -1,
                seconds: 60,
                startBreakTime: state.startBreakTime,
                startSessionTime : state.startSessionTime,
                timer: state.timer,
                stop: false
            })
        case "TOGGLE-TIMER":
            if(state.timer === false){
                return({
                    timer: !state.timer,
                    minutes: state.startBreakTime,
                    seconds: 61,
                    startBreakTime: state.startBreakTime,
                    startSessionTime : state.startSessionTime,
                    stop: false
                })
            }   
            else{
                return({
                    timer: !state.timer,
                    minutes: state.startSessionTime,
                    seconds: 60,
                    startBreakTime: state.startBreakTime,
                    startSessionTime : state.startSessionTime,
                    stop: false
                }) 
            }
            case "STOP":
                return({
                    timer: false,
                    minutes:state.minutes,
                    seconds:state.seconds,
                    startBreakTime: state.startBreakTime,
                    startSessionTime: state.startSessionTime,
                    stop: !state.stop
                })
            case "RESET":
                return({
                    startBreakTime: 5,
                    startSessionTime: 25,
                    seconds: 61,
                    minutes: 25,
                    breakTimer : false,
                    stop: state.stop
                })
        default:
            return null
    }
}
export default reducer;