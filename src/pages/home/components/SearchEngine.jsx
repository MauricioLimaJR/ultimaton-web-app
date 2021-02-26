import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import { withStyles } from '@material-ui/core/styles'
import { IconButton, Grid, TextField } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import { Formik, Form, Field } from 'formik'
// Custom components
import Text from '../../components/Text'
import * as colors from '../../../constants/colors'

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
  padding: 8px;
  cursor: pointer;
`

const SearchEngine = () => {
  const [searchCharacters, setSearchCharacters] = React.useState(false)
  const [searchComics, setSearchComics] = React.useState(true)

  const initialValues = { query: '' }

  const validationSchema = yup.object().shape({
    query: yup.string().required('Type something'),
  })

  const onSubmit = async (values, formikBag) => {
    try {
      const { query } = values
      console.log(query, formikBag)
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  const selected = {
    fontSize: '110%',
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
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={9}>
                  {/* Email field */}
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
                      />
                    )}
                  </Field>
                </Grid>

                {/* Submit button */}
                <Grid item xs={3}>
                  <IconButton type="submit">
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

export default SearchEngine
