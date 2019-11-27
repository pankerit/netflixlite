import { css } from 'styled-components'
import { break_points } from '@VARS'

const points = ['xl']

const above = points.reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${break_points[label]}px) {
    ${css(...args)}
  }
  `
  return acc
}, {})

const bellow = points.reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${break_points[label] - 0.001}px) {
    ${css(...args)}
  }
  `
  return acc
}, {})

export {
  above, bellow
}