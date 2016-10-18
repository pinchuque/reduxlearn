
import * as React from 'react';
import { ActionCreator } from 'redux';
interface Props{
    counter:number
    onClick(val): void,

}
export default class IncrementCounterComponent extends React.Component<Props,{}>{
    constructor(props, context) {
        super(props, context);
    }
    handleClick(){
        debugger;
        this.props.onClick(1);
    }
    render() {
        return <div>
         <h2>{'Score 1 ' + this.props.counter}</h2>
        <input type="button" id="increment-btn"
                      value="Increment"
                      onClick={this.handleClick.bind(this)}/>
</div>
    }
}