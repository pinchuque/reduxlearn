import * as React from 'react'
import classnames from 'classnames'
import * as React from 'react';

interface Props{
    counterPositive:boolean,
    onClick(item): void,
    fontColor?: string
}
export default class IncrementCounterComponent extends React.Component<Props,{}>{
    constructor(){
        super();
    }
    render() {
        return <input type="button" id="increment-btn"
                      className={this.props.counterPositive ? 'increment-btn-warned' : 'default'}
                      style={{color : this.props.fontColor}}
                      value="Increment"
                      onClick={this.props.onClick}/>
    }
}