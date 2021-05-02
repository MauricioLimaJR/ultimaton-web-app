import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
// Custom components
import Carousell from '../components/Carousell'
import Layout from '../components/Layout'
import SearchEngine from './components/SearchEngine'
import withAuth from '../components/hocs/withAuth'
// Others
import { getInitialSet } from '../../core/operations'

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 10px;
  text-align: center;
`

const Home = () => {
  const [characters, setCharacters] = React.useState([])
  const [comics, setComics] = React.useState([])

  React.useEffect(async () => {
    const initialSetData = await getInitialSet(10)
    setCharacters(initialSetData.characters)
    setComics(initialSetData.comics)
  }, [])

  return (
    <Layout>
      <MainContainer
        container
        justify="center"
        alignContent="flex-start"
        // spacing={2}
      >
        <Grid item xs={8}>
          <SearchEngine />
        </Grid>

        <Grid item xs={12}>
          <Carousell title="Characters" data={characters} />
        </Grid>

        <Grid item xs={12}>
          <Carousell title="Comics" data={comics} />
        </Grid>
      </MainContainer>
    </Layout>
  )
}

export default withAuth(Home)
