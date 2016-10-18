import AppDispatcher from './appDispatcher'
declare var require: any
var EventEmitter =require ('events').EventEmitter;
import Actions from './constants'

var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var CounterRightStore = assign({}, EventEmitter.prototype, {
    model:{
        counterRight:0,
        counterRightPositive:false,
    },

    increment(val) {
        this.model.counterRight+=val;
        this.checkCounter();
    },
    decrement(val){
        this.model.counterRight-=val;
        this.checkCounter();
    },
    set(val){
        this.model.counterRight=val;
        this.checkCounter();
    },
    checkCounter(){
        if(this.model.counterLeft >0){
            this.model.counterLeftPositive = true
        }
        else {
            this.model.counterLeftPositive = false
        }
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
});

interface ActionInterface{
    actionType:any,
    payload:any
}

AppDispatcher.register(function(action:ActionInterface) {
    console.log(action.actionType)
    switch (action.actionType) {
        case Actions.COUNTER_RIGHT_INC:
            CounterRightStore.increment(action.payload);
            setTimeout(function () { // Run after dispatcher has finished
                CounterRightStore.emitChange(CHANGE_EVENT);
            }, 0);
            break;
        case Actions.COUNTER_RIGHT_DEC:
            CounterRightStore.decrement(action.payload);
            setTimeout(function () { // Run after dispatcher has finished
                CounterRightStore.emitChange(CHANGE_EVENT);
            }, 0);
            break;
        case Actions.COUNTER_RIGHT_SET:
            CounterRightStore.set(action.payload);
            setTimeout(function () { // Run after dispatcher has finished
                CounterRightStore.emitChange(CHANGE_EVENT);
            }, 0);
            break;
        default:
        // no op
    }
});

export default CounterRightStore;