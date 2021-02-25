import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
// Custom components
import Text from '../components/Text'
import Layout from '../components/Layout'

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 10px;
  text-align: center;
`

const Home = () => {
  return (
    <Layout>
      <MainContainer alignContent="flex-start">
        <Text variant="tiny" color="alt">
          Welcome!
        </Text>
      </MainContainer>
    </Layout>
  )
}

export default Home
