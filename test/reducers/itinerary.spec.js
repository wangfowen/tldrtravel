import expect from 'expect'
import { itinerary, mkDay, mkItinerary } from '../../src/reducers/itinerary'
import { Action } from '../../src/common'

describe('itinerary reducer', () => {
  it('should return the initial state', () => {
    expect(itinerary(undefined, {})).toEqual(mkItinerary())
  })

  it('should handle reset', () => {
    expect(itinerary(mkItinerary([mkDay(0)]), {
      type: Action.Reset
    })).toEqual(mkItinerary())
  })

  //TODO: better way to test UUIDs? or leave UUIDs as is in other tests?
  it('should generate random UUID for new day', () => {
    const addDay = itinerary(mkItinerary(), {
      type: Action.AddDay
    })

    expect(addDay.days[0].id.length).toEqual(36)
  })

  it('should handle adding another day', () => {
    expect(itinerary(mkItinerary([mkDay(0, "0"), mkDay(1, "1")]), {
      type: Action.AddDay,
      id: "2"
    })).toEqual(mkItinerary([mkDay(0, "0"), mkDay(1, "1"), mkDay(2, "2")]))
  })
})
