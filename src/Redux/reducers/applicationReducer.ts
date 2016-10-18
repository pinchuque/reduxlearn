import leftCounterReducer from './leftCounterReducer'

import { combineReducers } from 'redux'

const applicationReducer = combineReducers({
    leftCounterReducer
})

export default applicationReducer
