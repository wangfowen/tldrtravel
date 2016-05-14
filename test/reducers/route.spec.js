import expect from 'expect'
import { itinerary, mkDay, mkItinerary } from '../../src/reducers/itinerary'
import { Action, RType } from '../../src/common'

const mkTestRoute = (id, name = "foo", description = "bar", category = undefined) => {
  return {
    id,
    name,
    description,
    category: category || RType.Other
  }
}

const mkTestItinerary = () => {
  return mkItinerary([mkDay(0, "0", [], [
    mkTestRoute("0"),
    mkTestRoute("1", "foo2", "bar2", RType.Foot),
    mkTestRoute("2")
  ])])
}

describe('route reducer', () => {
  it('should edit route', () => {
    expect(itinerary(mkTestItinerary(), {
      type: Action.EditRoute,
      id: "1",
      content: {
        name: "bar",
        description: "foo"
      }
    })).toEqual(
      mkItinerary([mkDay(0, "0", [], [
        mkTestRoute("0"),
        mkTestRoute("1", "bar", "foo", RType.Foot),
        mkTestRoute("2")
      ])])
    )
  })
})
