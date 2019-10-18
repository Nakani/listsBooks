import { combineReducers } from 'redux'
import listReducer from './lists/list.reducer'

const rootReducer = combineReducers({
  listReducer,
})

export default rootReducer
