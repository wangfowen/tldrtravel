import expect from 'expect'
import { itinerary, mkDay, mkItinerary, mkActivity, mkRoute } from '../../src/reducers/itinerary'
import { Action } from '../../src/common'

const testItinerary = () => {
  return mkItinerary([
    mkDay(0, "0"),
    mkDay(1, "1",
      [mkActivity("0"), mkActivity("1")],
      [mkRoute("0", "1", "0"), mkRoute("2", "3", "1")]),
    mkDay(2, "2")
  ])
}

describe('day reducer', () => {
  it('should generate random UUID for new activity', () => {
    const addActivity = itinerary(mkItinerary([mkDay(0, "0")]), {
      type: Action.AddActivity,
      dayId: "0"
    })

    expect(addActivity.days[0].activities[0].id.length).toEqual(36)
  })

  it('should generate random UUID for new route', () => {
    const addRoute = itinerary(mkItinerary([mkDay(0, "0")]), {
      type: Action.AddRoute,
      dayId: "0",
      fromId: "0",
      toId: "1"
    })

    expect(addRoute.days[0].routes[0].id.length).toEqual(36)
  })

  it('should handle adding first activity for a day', () => {
    expect(itinerary(mkItinerary([mkDay(0, "0")]), {
      type: Action.AddActivity,
      dayId: "0",
      id: "0"
    })).toEqual(mkItinerary([mkDay(0, "0", [mkActivity("0")])]))
  })

  it('should handle adding first activity for a day with undefined activity', () => {
    expect(itinerary(mkItinerary([mkDay(0, "0", undefined)]), {
      type: Action.AddActivity,
      dayId: "0",
      id: "0"
    })).toEqual(mkItinerary([mkDay(0, "0", [mkActivity("0")])]))
  })

  it('should handle adding another activity for a day', () => {
    expect(itinerary(testItinerary(), {
        type: Action.AddActivity,
        dayId: "1",
        id: "2"
    })).toEqual(mkItinerary([
      mkDay(0, "0"),
      mkDay(1, "1",
        [mkActivity("0"), mkActivity("1"), mkActivity("2")],
        [mkRoute("0", "1", "0"), mkRoute("2", '3', '1')]),
      mkDay(2, "2")
    ]))
  })

  it('should handle adding first route for a day', () => {
    expect(itinerary(mkItinerary([mkDay(0, "0")]), {
      type: Action.AddRoute,
      dayId: "0",
      id: "0",
      fromId: "0",
      toId: "1"
    })).toEqual(mkItinerary([mkDay(0, "0", [], [mkRoute("0", "1", "0")])]))
  })

  it('should handle adding first route for a day with undefined route', () => {
    expect(itinerary(mkItinerary([mkDay(0, "0", [], undefined)]), {
      type: Action.AddRoute,
      dayId: "0",
      id: "0",
      fromId: "0",
      toId: "1"
    })).toEqual(mkItinerary([mkDay(0, "0", [], [mkRoute("0", "1", "0")])]))
  })

  it('should handle adding another route for a day', () => {
    expect(itinerary(testItinerary(), {
      type: Action.AddRoute,
      dayId: "1",
      id: "2",
      fromId: "3",
      toId: "4"
    })).toEqual(mkItinerary([
      mkDay(0, "0"),
      mkDay(1, "1",
        [mkActivity("0"), mkActivity("1")],
        [mkRoute("0", "1", "0"), mkRoute("2", "3", "1"), mkRoute('3', '4', '2')]),
      mkDay(2, "2")
    ]))
  })

  it('should handle deleting a route', () => {
    expect(itinerary(testItinerary(), {
      type: Action.DeleteRoute,
      id: "0"
    })).toEqual(mkItinerary([
      mkDay(0, "0"),
      mkDay(1, "1", 
        [mkActivity("0"), mkActivity("1")],
        [mkRoute('2', '3', '1')]),
      mkDay(2, "2")
    ]))
  })

  it('should handle deleting an activity', () => {
    expect(itinerary(testItinerary(), {
      type: Action.DeleteActivity,
      id: "0"
    })).toEqual(mkItinerary([
      mkDay(0, "0"),
      mkDay(1, "1",
        [mkActivity("1")],
        //the associated route(s) also got deleted
        [mkRoute("2", "3", "1")]),
      mkDay(2, "2")
    ]))
  })

  it('should handle editing text', () => {
    expect(itinerary(mkItinerary([mkDay(0, "0")]), {
      type: Action.EditText,
      id: "0",
      text: "foo"
    })).toEqual(mkItinerary([mkDay(0, "0", [], [], "foo")]))
  })
})
