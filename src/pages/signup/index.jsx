import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
// Custom components
import SignUpForm from './SignUpForm'
import Text from '../components/Text'
import withNoAuth from '../components/hocs/withNoAuth'
// Others
import UltimatonLogo from '../../static/images/ultimaton.svg'

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 10px;
  text-align: center;
`

const SignUp = () => {
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
          Sign up now!
        </Text>
        <Text color="secondary">Few steps to go!</Text>
      </Grid>

      <Grid item xs={12}>
        <SignUpForm />
      </Grid>

      <Grid item xs={12} style={{ marginTop: '10px' }}>
        <Text variant="tiny" color="secondary">
          Already have an account?{' '}
          <strong onClick={() => history.push('/signin')}>Sign In.</strong>
        </Text>
      </Grid>
    </MainContainer>
  )
}

export default withNoAuth(SignUp)
