import React from 'react'
import styled from 'styled-components'
import { Grid, CircularProgress } from '@material-ui/core'
// Custom components
import Carousell from '../components/Carousell'
import ItemList from '../components/ItemsList'
import Layout from '../components/Layout'
import SearchEngine from './components/SearchEngine'
import withAuth from '../components/hocs/withAuth'
// Others
import { getInitialSet } from '../../core/operations'
import './index.css'

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 10px;
  text-align: center;
`

const Home = () => {
  const [characters, setCharacters] = React.useState([])
  const [comics, setComics] = React.useState([])
  // Search items
  const [charactersResult, setCharactersResult] = React.useState(null)
  const [comicsResult, setComicsResult] = React.useState(null)
  const [isSearching, setIsSearching] = React.useState(false)

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
        className="gradientBackground"
      >
        <Grid item xs={10}>
          <SearchEngine
            changeSearchStatus={(status) => setIsSearching(status)}
            handleCharactersSearch={setCharactersResult}
            handleComicsSearch={setComicsResult}
          />
        </Grid>

        {/* Display search result list or loading */}
        {isSearching && !charactersResult && !comicsResult ? (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        ) : isSearching ? (
          <ItemList characters={charactersResult} comics={comicsResult} />
        ) : null}

        {/* Display inital set of items or loading */}
        {!isSearching && characters.length > 0 && comics.length > 0 ? (
          <>
            <Grid item xs={12}>
              <Carousell title="Characters" data={characters} />
            </Grid>

            <Grid item xs={12}>
              <Carousell title="Comics" data={comics} />
            </Grid>
          </>
        ) : !isSearching ? (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        ) : null}
      </MainContainer>
    </Layout>
  )
}

export default withAuth(Home)
