import AppDispatcher from './appDispatcher'
declare var require: any
var EventEmitter =require ('events').EventEmitter;
import Actions from './constants'
var assign = require('object-assign');
import counterService from './counterService'
import {CounterActions} from './counterActions'

var CHANGE_EVENT = 'change';

var CounterLeftStore = assign({}, EventEmitter.prototype, {
    model:{
        counterLeft:0,
        counterLeftPositive:false,
        errorMessage: '',
        isLoading:false
    },

    increment(val) {
        this.model.counterLeft+=val;
        this.checkCounter();

    },
    decrement(val) {
        this.model.counterLeft-=val;
        this.checkCounter();
    },
    getCounterLeft(){
        var promise = counterService.getCounter();
        this.model.isLoading = true;
        promise.then(
            (data : any )=> {
                CounterActions.getLeftCounterSuccess(data);
            },
            (err)=>{
                this.model.isLoading = false;
                this.model.errorMessage = err.statusText;
            })
    },
    incrementTwice(val) {
        this.model.counterLeft += val;
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
    getCounterLeftSuccess(data){
        this.model.counterLeft = data.data.counter;
        this.model.isLoading = false;
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
interface actionInterface{
    actionType:any,
    payload:any
}
AppDispatcher.register(function(action:actionInterface) {
    console.log(action.actionType)
    switch (action.actionType) {
            case Actions.COUNTER_LEFT_INC:
                CounterLeftStore.increment(action.payload);
                setTimeout(function () { // Run after dispatcher has finished
                    CounterLeftStore.emitChange(CHANGE_EVENT);
                }, 0);
                break;
            case Actions.COUNTER_LEFT_GET:
                CounterLeftStore.getCounterLeft();
                setTimeout(function () { // Run after dispatcher has finished
                    CounterLeftStore.emitChange(CHANGE_EVENT);
                }, 0);
                break;
            case Actions.COUNTER_LEFT_GET_SUCCESS:
                CounterLeftStore.getCounterLeftSuccess(action.payload);
                setTimeout(function () { // Run after dispatcher has finished
                    CounterLeftStore.emitChange(CHANGE_EVENT);
                }, 0);
                break;
            case Actions.COUNTER_LEFT_DEC:
                CounterLeftStore.decrement(action.payload);
                setTimeout(function () { // Run after dispatcher has finished
                    CounterLeftStore.emitChange(CHANGE_EVENT);
                }, 0);
                break;
            case Actions.COUNTER_LEFT_INC_TWICE:
                CounterLeftStore.incrementTwice(action.payload);
                setTimeout(function () { // Run after dispatcher has finished
                    CounterLeftStore.emitChange(CHANGE_EVENT);
                }, 0);
                break;
            default:
            // no op
        }
    })

export default CounterLeftStore;