import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
// Custom components
import Text from '../components/Text'
// Others
import * as colors from '../../constants/colors'
import { removeToken } from '../../lib/auth'
import UltimatonLogo from '../../static/images/ultimaton.svg'

const HeaderContainer = styled(Grid)`
  background-color: ${colors.black};
  height: 60px;
`

const NavMenuCanvas = styled(Grid)`
  background-color: ${colors.godGray};
  height: 300px;
  width: 100%;
  position: absolute;
  top: 60px;
  z-index: 9;
`

const NavMenuShadow = styled(Grid)`
  background-color: ${colors.black};
  opacity: 50%;
  position: absolute;
  top: 360px;
  height: calc(100vh - 360px);
  width: 100%;
`

const StyledItem = styled(Grid)`
  :hover {
    background-color: ${colors.black};
  }
`

const Header = () => {
  const [navMenu, showNavMenu] = React.useState(false)
  const history = useHistory()

  const menuOptions = [
    { title: 'Profile', link: '/profile' },
    { title: 'Favourites', link: '/favourites' },
  ]

  return (
    <>
      <HeaderContainer
        container
        justify="space-between"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <img
            src={UltimatonLogo}
            width="90px"
            height="45px"
            alt="Ultimaton logo"
            onClick={() => history.push('/')}
          />
        </Grid>
        <Grid item xs={2}>
          <MenuIcon
            onClick={() => showNavMenu(!navMenu)}
            fontSize="large"
            color="error"
          />
        </Grid>

        {navMenu ? (
          <>
            <NavMenuCanvas
              container
              justify="center"
              alignContent="center"
              spacing={2}
            >
              {menuOptions.map((option, index) => (
                <StyledItem
                  key={index}
                  item
                  xs={12}
                  onClick={() => history.push(option.link)}
                >
                  <Text variant="large">{option.title}</Text>
                </StyledItem>
              ))}

              {/* Sign out option */}
              <StyledItem item xs={12} onClick={() => removeToken(history)}>
                <Text variant="large">Sign out</Text>
              </StyledItem>

              <Grid item xs={12}>
                <Text onClick={() => showNavMenu(!navMenu)}>Close</Text>
              </Grid>
            </NavMenuCanvas>
            <NavMenuShadow />
          </>
        ) : null}
      </HeaderContainer>
    </>
  )
}

export default Header
