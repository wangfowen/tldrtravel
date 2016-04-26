import expect from 'expect'
import itinerary from '../../src/reducers/itinerary'
import { Action } from '../../src/common'

describe('itinerary reducer', () => {
  it('should return the initial state', () => {
    expect(itinerary(undefined, {})).toEqual({
      days: []
    })
  })

  it('should handle reset', () => {
    expect(itinerary({
      days: [undefined]
    }, {
      type: Action.Reset
    })).toEqual({
      days: []
    })
  })
})
