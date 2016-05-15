import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Header from '../../src/components/Header'

describe('components', () => {
  let renderer = TestUtils.createRenderer()

  it('should render Header', () => {
    renderer.render(<Header title="" author="" />)
    let output = renderer.getRenderOutput()
  })
})
