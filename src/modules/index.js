import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import game from './game'

export default combineReducers({
  router: routerReducer,
  counter,
  game
})
