import * as React from 'react'

interface Props{
    onClick(item):void,
}
interface State{
    counterValue:number
}
export default class InputCounterComponent extends React.Component<Props,State>{
    constructor(){
        super();
        this.state={
            counterValue:0
        };
    }
    render(){
        return <div>
            <input type="text" style={{width:100}} value={this.state.counterValue}
                   onChange={ this.handleChange.bind(this) } />
            <input type="button" value="Set Counter" onClick={this.props.onClick.bind(null, this.state.counterValue)}/>
        </div>
    }
    handleChange(e) {
        this.setState({ counterValue: e.target.value });
    }
}