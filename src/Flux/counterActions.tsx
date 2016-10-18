import AppDispatcher from './appDispatcher'
import Actions from './constants'

export var CounterActions ={
    incrementLeftCounter(data){
        AppDispatcher.dispatch({
            actionType: Actions.COUNTER_LEFT_INC,
            payload:data
        });
    },
    getLeftCounter(){
        AppDispatcher.dispatch({
            actionType: Actions.COUNTER_LEFT_GET
        });
    },
    getLeftCounterSuccess(data){
        AppDispatcher.dispatch({
            actionType: Actions.COUNTER_LEFT_GET_SUCCESS,
            payload:data
        });
    },
    decrementLeftCounter(data){
        AppDispatcher.dispatch({
            actionType: Actions.COUNTER_LEFT_DEC,
            payload:data
        });
    },
    incrementLeftTwiceCounter(data){
        AppDispatcher.dispatch({
            actionType: Actions.COUNTER_LEFT_INC_TWICE,
            payload:data
        });
    },
    incrementRightCounter(data){
        AppDispatcher.dispatch({
            actionType: Actions.COUNTER_RIGHT_INC,
            payload:data
        });
    },
    decrementRightCounter(data){
        AppDispatcher.dispatch({
            actionType: Actions.COUNTER_RIGHT_DEC,
            payload:data
        });
    },
    SetSecondCounter(data){
        AppDispatcher.dispatch({
            actionType: Actions.COUNTER_RIGHT_SET,
            payload: data
        });
    }
}