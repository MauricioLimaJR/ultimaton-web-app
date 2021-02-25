import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
// Custom components
// import Text from '../components/Text'
import Carousell from '../components/Carousell'
import Layout from '../components/Layout'
import SearchEngine from './components/SearchEngine'
import IronMan from '../../static/images/iron-man.jpg'

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 10px;
  text-align: center;
`

const Home = () => {
  const elements = [
    { img: IronMan },
    { img: IronMan },
    { img: IronMan },
    { img: IronMan },
  ]

  return (
    <Layout>
      <MainContainer
        container
        justify="center"
        alignContent="flex-start"
        spacing={4}
      >
        <Grid item xs={8}>
          <SearchEngine />
        </Grid>

        <Grid item xs={12}>
          <Carousell title="Characters" data={elements} />
        </Grid>

        <Grid item xs={12}>
          <Carousell title="Comics" data={elements} />
        </Grid>
      </MainContainer>
    </Layout>
  )
}

export default Home
