
import * as React from 'react';

declare var require: any
var TimerMixin = require('react-timer-mixin');

import IncrementCounterComponent from './incrementControl';
import DecrementCounterComponent from './decrementControl';
import DoubleIncrementCounterComponent from './doubleIncrementCounterControl';
import InputCounterComponent from './InputCounterControl'
import  CounterComponent from './counterComponent'

/*
interface Props{
    
}
interface State{
    counterLeft: number,
    counterRight:number,
    counterLeftPositive:boolean,
    counterRightPositive:boolean,
    isLoading:boolean,
    error:string
}

var getCounter = function () {
    var counterLeftModel = CounterLeftStore.model;
    var counterRightModel = CounterRightStore.model;

    return {
        counterLeft: counterLeftModel.counterLeft,
        isLoading: counterLeftModel.isLoading,
        counterRight:counterRightModel.counterRight,
        error:counterLeftModel.errorMessage,
        counterLeftPositive:counterLeftModel.counterLeftPositive,
        counterRightPositive:counterRightModel.counterRightPositive
    }
};

export default class ManualCounter extends React.Component<Props, State> {
    constructor(){
        super();
        this.state={
            counterLeft:0,
            counterRight: 0,
            counterLeftPositive:false,
            counterRightPositive:false,
            isLoading : false,
            error:''
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(){
        var model = getCounter();
        this.setState(model );
    }
    componentDidMount() {
        CounterLeftStore.addChangeListener(this.onChange);
        CounterRightStore.addChangeListener(this.onChange);
       this.autoIncreaseLeftCounter();
    }
    componentWillUnmount() {
        CounterLeftStore.removeChangeListener(this.onChange);
        CounterRightStore.removeChangeListener(this.onChange);
    }
    autoIncreaseLeftCounter(){
        TimerMixin.setTimeout(
            () => {
                this._onLeftIncrementClick();
                this.autoIncreaseLeftCounter();},
            1000);
    }
    render() {
        return <div>
            <h2>{'Counter left: ' + this.state.counterLeft  }</h2>
            <h1 style={{display:this.state.isLoading? 'inline':'none'}}>Loading</h1>
            <div style={{display:"inline"}}>
                <IncrementCounterComponent onClick={this._onLeftIncrementClick}
                                           counterPositive={this.state.counterLeftPositive}
                                           fontColor="blue" />
                <DecrementCounterComponent onClick={this._onLeftDecrementClick}
                                           counterPositive={this.state.counterLeftPositive}/>
                <DoubleIncrementCounterComponent onClick={this._onLeftIncrementTwiceClick}
                                                 counterPositive={this.state.counterLeftPositive}/>
                <CounterComponent onClick={this._onGetCounter}></CounterComponent>
                <div>{this.state.error}</div>
            </div>
                <h2>{'Counter right: ' + this.state.counterRight}</h2>
                <IncrementCounterComponent onClick={this._onRightIncrementClick}
                                           counterPositive={this.state.counterRightPositive}
                                           fontColor="blue" />
                <DecrementCounterComponent onClick={this._onRightDecrementClick}
                                           counterPositive={this.state.counterRightPositive} />
            <InputCounterComponent onClick={this._onInputCounterEntered}></InputCounterComponent>
            
        </div>
    }
    _onInputCounterEntered(val){
        CounterActions.SetSecondCounter(val);
    }
    _onGetCounter(){
        CounterActions.getLeftCounter();
    }
    _onLeftIncrementClick(){
        CounterActions.incrementLeftCounter(1);
    }
    _onLeftDecrementClick(){
        CounterActions.decrementLeftCounter(1);
    }
    _onLeftIncrementTwiceClick(){
        CounterActions.incrementLeftTwiceCounter(2);
    }
    _onRightIncrementClick(){
        CounterActions.incrementRightCounter(1);
    }
    _onRightDecrementClick(){
        CounterActions.decrementRightCounter(1);
    }
}*/