import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer,{startBreakTime:"43"}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch({
    type: "setTime",
    startBreakTime: 5,
    startSessionTime: 25,
    seconds: 61,
    minutes: 25,
    breakTimer : false,
    stop: true
})
console.log(store.getState());
export default store;
