import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import * as yup from 'yup'
import { withStyles } from '@material-ui/core/styles'
import { IconButton, Grid, TextField } from '@material-ui/core'
import { Search as SearchIcon, Close as CloseIcon } from '@material-ui/icons'
import { Formik, Form, Field } from 'formik'
// Custom components
import Text from '../../components/Text'
import * as colors from '../../../constants/colors'
import { marvelItemsSearch } from '../../../core/operations'

const CustomTextField = withStyles({
  root: {
    '& label': {
      color: `${colors.white}`,
    },
    '& label.Mui-focused': {
      color: `${colors.pumice}`,
    },
    '& .MuiFormHelperText-root': {
      color: `${colors.cardinal}`,
    },
    '& .MuiInput-input': {
      color: `${colors.white}`,
      backgroundColor: `${colors.brownDerby}`,
      paddingLeft: '5px',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `${colors.white}`,
    },
  },
})(TextField)

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 10px;
  text-align: center;
  z-index: 1;
`

const FilterButton = styled(Grid)`
  border: 1px solid ${colors.oldBrick};
  border-radius: 3px;
  background-color: ${colors.black};
  padding: 8px 1px;
  cursor: pointer;
`

const SearchEngine = ({
  changeSearchStatus,
  handleCharactersSearch,
  handleComicsSearch,
}) => {
  const [searchCharacters, setSearchCharacters] = React.useState(false)
  const [searchComics, setSearchComics] = React.useState(true)
  const [query, setQuery] = React.useState('')

  const initialValues = { query }

  const validationSchema = yup.object().shape({
    query: yup.string().required('Type something'),
  })

  const clearQuery = (event) => {
    setQuery('')
    event.target.value = ''
    handleChange(event)
  }

  const iconSearchSubmit = () => {
    const event = { target: { value: query } }
    handleChange(event)
  }

  const handleChange = async (event) => {
    setQuery(event.target.value)

    if (event.target.value.length > 0) changeSearchStatus(true)
    else changeSearchStatus(false)

    const result = await marvelItemsSearch(
      event.target.value,
      searchCharacters,
      searchComics
    )

    if (searchCharacters && result.charactersList)
      handleCharactersSearch(result.charactersList)
    else handleCharactersSearch(null)

    if (searchComics && result.comicsList) handleComicsSearch(result.comicsList)
    else handleComicsSearch(null)
  }

  const selected = {
    color: colors.white,
    backgroundColor: colors.oldBrick,
    border: `1px solid ${colors.black}`,
  }

  return (
    <MainContainer container>
      {/* Filter Buttons */}
      <Grid container justify="center">
        <FilterButton
          item
          xs={6}
          onClick={() => setSearchCharacters(!searchCharacters)}
          style={searchCharacters ? selected : null}
        >
          <Text>
            <strong>Characters</strong>
          </Text>
        </FilterButton>

        <FilterButton
          item
          xs={6}
          onClick={() => setSearchComics(!searchComics)}
          style={searchComics ? selected : null}
        >
          <Text>
            <strong>Comics</strong>
          </Text>
        </FilterButton>
      </Grid>

      {/* Search Field */}
      <Grid item xs={12}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {}}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={7} sm={8}>
                  <Field name="query">
                    {({ field }) => (
                      <CustomTextField
                        {...field}
                        error={errors['query'] && touched['query']}
                        id="standard-error-helper-text"
                        label={''}
                        placeholder={
                          errors['query'] && touched['query']
                            ? errors['query']
                            : '...'
                        }
                        value={query}
                        onChange={handleChange}
                      />
                    )}
                  </Field>
                </Grid>

                {/* Submit button */}
                {query.length > 0 ? (
                  <Grid item xs={2}>
                    <IconButton onClick={clearQuery}>
                      <CloseIcon fontSize="large" color="error" />
                    </IconButton>
                  </Grid>
                ) : null}

                <Grid item xs={2}>
                  <IconButton onClick={iconSearchSubmit}>
                    <SearchIcon fontSize="large" color="error" />
                  </IconButton>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </MainContainer>
  )
}

SearchEngine.propTypes = {
  changeSearchStatus: PropTypes.func,
  handleCharactersSearch: PropTypes.func,
  handleComicsSearch: PropTypes.func,
}

export default SearchEngine
