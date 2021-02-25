import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
// Custom components
// import Text from '../components/Text'
import Layout from '../components/Layout'
import SearchEngine from './components/SearchEngine'

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 10px;
  text-align: center;
`

const Home = () => {
  return (
    <Layout>
      <MainContainer container alignContent="flex-start">
        <Grid item xs={8}>
          <SearchEngine />
        </Grid>
      </MainContainer>
    </Layout>
  )
}

export default Home
