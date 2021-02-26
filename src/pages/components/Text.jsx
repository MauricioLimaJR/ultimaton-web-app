import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import * as colors from '../../constants/colors'

const StyledText = styled.p`
  margin: 0 5px 0;
  text-align: center;
`

/**
 * Custom Text
 * @param {String} variant - large, medium, small (default)
 * @param {String} color - primary (default), secondary, alt
 */
const Text = ({ variant = 'small', color = 'primary', children, ...props }) => {
  const setVariant = (variant) => {
    switch (variant) {
      case 'large':
        return { fontSize: '2rem', fontWeight: 'bold' }
      case 'medium':
        return { fontSize: '1.5rem', fontWeight: 'bold' }
      case 'tiny':
        return { fontSize: '0.8rem' }
      case 'small':
      default:
        return {}
    }
  }

  const setColor = (color) => {
    switch (color) {
      case 'alt':
        return {
          color: colors.cardinal,
        }
      case 'secondary':
        return {
          color: colors.steelBlue,
        }
      case 'primary':
      default:
        return {
          color: colors.pumice,
        }
    }
  }

  const customStyle = {
    ...setVariant(variant),
    ...setColor(color),
  }

  return (
    <StyledText style={customStyle} {...props}>
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
}

export default Text
