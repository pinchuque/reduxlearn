import {createAction,Action} from 'redux-actions';
import * as types from '../constants/actionTypes'
import {LeftCounter} from '../models/counter'

export interface LeftCounterActions{
    icrementLeftCounter?(val): void
}
export const incrementLeftCounter =  createAction(types.COUNTER_LEFT_INC)
