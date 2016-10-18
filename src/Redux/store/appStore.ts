import applicationReducer from '../reducers/applicationReducer'
import { createStore } from 'redux'
import {LeftCounter} from '../models/counter'

let store = createStore(applicationReducer)

export default store;