import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import * as colors from '../../constants/colors'

const CustomDiv = styled.div`
  align-content: center;
  align-self: center;
  border-radius: 5px;
  color: ${colors.white};
  display: flex;
  font-family: inherit;
  font-weight: bold;
  justify-content: center;
  margin: 0 auto;
  padding: 10px 25px;
  width: max-content;

  :hover {
    background-color: ${colors.oldBrick};
    box-shadow: 1px 1px 3px ${colors.tundora};
    cursor: pointer;
  }
`

const CustomButton = styled.button`
  background: none;
  border: none;
  outline: none;
`

const CustomHref = styled.a`
  background: none;
  border: none;
  outline: none;
  text-decoration: none;
`

/**
 * Custom Button
 *
 * @param {String} color - primary (default), secondary or alt
 * @param {String} size - small, medium (default) or large
 */
const Button = ({ color, size = 'medium', children, external, ...props }) => {
  const setColor = (color) => {
    switch (color) {
      case 'alt':
        return {
          backgroundColor: colors.mirage,
          color: colors.pumice,
        }
      case 'secondary':
        return {
          backgroundColor: colors.pumice,
          color: colors.cardinal,
        }
      case 'primary':
      default:
        return {
          backgroundColor: colors.cardinal,
        }
    }
  }

  const setSize = (size) => {
    switch (size) {
      case 'large':
        return { width: '200px' }
      case 'small':
        return { width: '150px' }
      case 'medium':
      default:
        return { width: '180px' }
    }
  }

  const btnStyle = {
    ...setColor(color),
    ...setSize(size),
  }

  return external ? (
    <CustomHref href={external} target="./" {...props}>
      <CustomDiv style={btnStyle}>{children}</CustomDiv>
    </CustomHref>
  ) : (
    <CustomButton {...props}>
      <CustomDiv style={btnStyle}>{children}</CustomDiv>
    </CustomButton>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  external: PropTypes.string,
  size: PropTypes.string,
}

export default Button
