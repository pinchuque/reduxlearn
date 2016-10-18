
import * as React from 'react';

interface Props{
    counterPositive:boolean,
    onClick(item): void
}

export default class doubleIncrementCounterControl extends React.Component<Props,{}>{
    constructor(){
        super();
    }
    render() {
        return <input type="button"
                        /*className={this.props.counterPositive ? 'default' : 'decrement-btn-warned'}*/
                      value="+2"
                      onClick={this.props.onClick}/>
    }
}