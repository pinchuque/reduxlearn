import * as React from 'react'



interface Props{
    counterPositive:boolean,
    onClick(item): void
}

export default class DecrementCounterComponent extends React.Component<Props,{}>{
    constructor(){
        super();
    }
    render() {
        return <input type="button" id="decrement-btn"
                      className={this.props.counterPositive ? 'default' : 'decrement-btn-warned'} //todo: add to actions
                      value="Decrement"
                      onClick={this.props.onClick}/>
    }
}

export default DecrementCounterComponent