import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import {LeftCounter} from '../models/counter'
import {COUNTER_LEFT_INC} from '../constants/actionTypes'
import {incrementLeftCounter} from '../actions/leftCounterActions'
const initialState = <LeftCounter>{
    counterLeft: 15,
};

const leftCounterReducer = handleActions({
    [COUNTER_LEFT_INC]: (state: LeftCounter, action): LeftCounter => ({
        counterLeft: state.counterLeft + action.payload
    })
},initialState);

export default leftCounterReducer;