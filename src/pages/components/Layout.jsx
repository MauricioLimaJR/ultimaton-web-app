import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
// Custom components
import Header from './Header'
// Others
// import * as colors from '../../constants/colors'

const LayoutContainer = styled(Grid)`
  height: 100%;
  /* padding: 15px 10px; */
  text-align: center;
`

const Layout = ({ children }) => (
  <LayoutContainer container>
    <Header />

    {children}
  </LayoutContainer>
)

Layout.propTypes = {
  children: PropTypes.string,
}

export default Layout
