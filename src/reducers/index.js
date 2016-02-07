import { combineReducers } from 'redux'
import itinerary from './itinerary'
import meta from './meta'

const trip = combineReducers({
  itinerary,
  meta
})
export default trip
