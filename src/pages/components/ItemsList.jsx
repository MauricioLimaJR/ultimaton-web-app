import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { FavoriteBorder as FavoriteBorderIcon } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
// Custom components
import * as colors from '../../constants/colors'
import Text from '../components/Text'
import { getImagePath, getNameOrTitle } from '../../lib/utils'

const MainContainer = styled(Grid)`
  height: 100%;
  text-align: center;
`

const VerticalScroll = styled(Grid)`
  max-height: ${(props) => (props && props['data-fullview'] ? '56vh' : '28vh')};
  overflow-y: scroll;
`

const Image = styled.img`
  border: 2px solid ${colors.black};
  margin-right: 2px;
  cursor: pointer;
`

const Title = styled.p`
  color: ${colors.oldBrick};
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0;
`

const Description = styled.p`
  margin: 0;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

// eslint-disable-next-line react/prop-types
const RowItem = ({ imagePath, title, description, handleClick }) => {
  return (
    <Grid container>
      <Grid xs={3}>
        <Image onClick={handleClick} src={imagePath} />
      </Grid>

      <Grid xs={6}>
        <Title onClick={handleClick}>{title}</Title>
        <Description>{description}</Description>
      </Grid>

      <Grid xs={2}>
        <FavoriteBorderIcon fontSize="small" color="error" />
      </Grid>
    </Grid>
  )
}

const ItemsList = ({ characters, comics }) => {
  const history = useHistory()
  const fullView = !characters || !comics

  return (
    <MainContainer
      container
      justify="flex-start"
      alignContent="flex-start"
      spacing={1}
    >
      {characters ? (
        <>
          <Grid item xs={'auto'}>
            <Text variant="medium" color="secondary">
              Characters
            </Text>
          </Grid>

          <Grid item xs={12}>
            <VerticalScroll data-fullview={fullView}>
              {characters.map((character, index) => (
                <RowItem
                  key={index}
                  imagePath={getImagePath(character, 'standard_small')}
                  title={getNameOrTitle(character)}
                  description={character.description}
                  handleClick={() => history.push(`/character/${character.id}`)}
                />
              ))}
            </VerticalScroll>
          </Grid>
        </>
      ) : null}

      {comics ? (
        <>
          <Grid item xs={'auto'}>
            <Text variant="medium" color="secondary">
              Comics
            </Text>
          </Grid>

          <Grid item xs={12}>
            <VerticalScroll data-fullview={fullView}>
              {comics.map((comic, index) => (
                <RowItem
                  key={index}
                  imagePath={getImagePath(comic, 'standard_small')}
                  title={getNameOrTitle(comic)}
                  description={comic.description}
                  handleClick={() => history.push(`/comic/${comic.id}`)}
                />
              ))}
            </VerticalScroll>
          </Grid>
        </>
      ) : null}
    </MainContainer>
  )
}

ItemsList.propTypes = {
  characters: PropTypes.array,
  comics: PropTypes.array,
}

export default ItemsList
