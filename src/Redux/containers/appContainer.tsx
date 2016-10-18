
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import {incrementLeftCounter , LeftCounterActions} from '../actions/leftCounterActions'
import IncrementCounterComponent from '../components/incrementControl'

interface Actions extends LeftCounterActions{
    
}
interface Props extends Actions{
    counterLeft?:number
}

const mapStateToProps = function(state){
    return {
        counterLeft: state.leftCounterReducer.counterLeft
    }

};

const mapDispatchToProps = function(dispatch){

    var act = {
        icrementLeftCounter: bindActionCreators(incrementLeftCounter, dispatch)
    }
    debugger;
    return act;

}

@connect(mapStateToProps,mapDispatchToProps)
export default class ManualCounter extends React.Component<Props,any> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return <div>
            <IncrementCounterComponent counter={this.props.counterLeft} onClick={ this.props.icrementLeftCounter}/>
        </div>
    }
}
