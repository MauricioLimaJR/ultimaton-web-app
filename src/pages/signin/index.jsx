import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
// Custom components
import Text from '../components/Text'
import SignInForm from './SignInForm'
import withNoAuth from '../components/hocs/withNoAuth'
// Others
import UltimatonLogo from '../../static/images/ultimaton.svg'

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 10px;
  text-align: center;
`

const SignIn = () => {
  const history = useHistory()

  return (
    <MainContainer container alignContent="flex-start">
      <Grid item xs={12} style={{ paddingTop: '5%' }}>
        <img
          src={UltimatonLogo}
          width="150px"
          height="75px"
          alt="Ultimaton logo"
        />
      </Grid>

      <Grid item xs={12}>
        <Text variant="medium" color="secondary">
          Login
        </Text>
        <Text color="secondary">Welcome back, sign in to continue.</Text>
      </Grid>

      <Grid item xs={12}>
        <SignInForm />
      </Grid>

      <Grid item xs={12} style={{ marginTop: '10px' }}>
        <Text variant="tiny" color="secondary">
          Do not have an account?{' '}
          <strong onClick={() => history.push('/signup')}>
            Create an account.
          </strong>
        </Text>
      </Grid>
    </MainContainer>
  )
}

export default withNoAuth(SignIn)
