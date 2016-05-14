import expect from 'expect'
import { itinerary, mkDay, mkItinerary } from '../../src/reducers/itinerary'
import { Action, AType } from '../../src/common'

const mkTestActivity = (id, name = "foo", description = "bar", category = undefined) => {
  return {
    id,
    name,
    description,
    category: category || AType.Other
  }
}

const mkTestItinerary = () => {
  return mkItinerary([mkDay(0, "0", [
    mkTestActivity("0"),
    mkTestActivity("1", "foo2", "bar2", AType.Nature),
    mkTestActivity("2")
  ])])
}

describe('activity reducer', () => {
  it('should edit activity', () => {
    expect(itinerary(mkTestItinerary(), {
      type: Action.EditActivity,
      id: "1",
      content: {
        name: "bar",
        description: "foo"
      }
    })).toEqual(
      mkItinerary([mkDay(0, "0", [
        mkTestActivity("0"),
        mkTestActivity("1", "bar", "foo", AType.Nature),
        mkTestActivity("2")
      ])])
    )
  })
})
