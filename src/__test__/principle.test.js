import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import App, { calculatePrinciple } from '../App'

describe('Calculating Principle interest', () => {
  describe('Testing for Default Values', () => {
    render(<App />)
    it('when the principle is of 5000', () => {
      const stimulusAmount = calculatePrinciple(5000, 2.5, 5)
      expect(stimulusAmount).toEqual(5625)
    })
  })
  describe('My Principle Interest', () => {
    it('when the principle is of 4000', () => {
      // render(<calculatePrinciple />)
      const stimulusAmount = calculatePrinciple(4000, 3, 10)
      expect(stimulusAmount).toEqual(5200)
    })
  })
  describe('When Values are less than zero', () => {
    it(`this shouldn't compute and throw an Error`, () => {
      // render(<calculatePrinciple />)
      expect(() => {
        calculatePrinciple(-1, -2, -1)
      }).toThrow()
    })
  })
})
