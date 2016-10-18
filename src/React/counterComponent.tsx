
import * as React from 'react';

interface Props{
    onClick(item): void
}

export default class CounterComponent extends React.Component<Props,{}>{
    constructor(){
        super();
    }
    render() {
        return <input type="button"
                      value="Get Counter Value"
                      onClick={this.props.onClick}/>
    }
}