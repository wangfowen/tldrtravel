import expect from 'expect'
import * as actions from '../src/actions'
import { Action } from '../src/common'

describe('edit text action', () => {
  it('edit text should create EditText action', () => {
    expect(actions.editText(1, 'text')).toEqual({
      type: Action.EditText,
      id: 1,
      text: 'text'
    })
  })
})
