import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
// Custom components
import Button from '../components/Button'
import Text from '../components/Text'
// Others
import UltimatonLogo from '../../static/images/ultimaton.svg'
import Hulk from '../../static/images/hulk.jpeg'
import CaptainMarvel from '../../static/images/captain-marvel.jpg'
import IronMan from '../../static/images/iron-man.jpg'

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 0;
  text-align: center;
`

const SquareImage = styled.img`
  height: 32vw;
  width: 32vw;
  border: 1px solid black;
`

const Landing = () => {
  const history = useHistory()

  return (
    <MainContainer container direction="column">
      <Grid item style={{ margin: '30% 0 5%' }}>
        <img
          src={UltimatonLogo}
          width="200px"
          height="100px"
          alt="Ultimaton logo"
        />
      </Grid>

      <Grid item style={{ marginBottom: '10%', padding: '0 10%' }}>
        <Text color="secondary">
          Pick your favourites MARVEL’S Characteres and Comics?
        </Text>
      </Grid>

      <Grid item style={{ marginBottom: '10%' }}>
        <SquareImage src={Hulk}></SquareImage>
        <SquareImage src={CaptainMarvel}></SquareImage>
        <SquareImage src={IronMan}></SquareImage>
      </Grid>

      <Grid item>
        <Button onClick={() => history.push('/signin')}>PICK NOW</Button>
      </Grid>
    </MainContainer>
  )
}

export default Landing
