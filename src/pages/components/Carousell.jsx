import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
// Custom components
import * as colors from '../../constants/colors'
import Text from '../components/Text'
import { getImagePath, getNameOrTitle } from '../../lib/utils'

const MainContainer = styled(Grid)`
  height: 100%;
  text-align: center;
`

const HorizontalScroll = styled.div`
  display: flex;
  max-height: 350px;
  overflow-x: scroll;
  width: 100%;
`

const Image = styled.img`
  border: 2px solid ${colors.black};
  margin-right: 2px;
  cursor: pointer;
`

const Legend = styled.p`
  margin: 0;
  font-size: 0.9rem;
  width: 100px;
  overflow: hidden;
  max-height: 5vh;
`

const Carousell = ({ title, data }) => {
  const history = useHistory()

  return (
    <MainContainer container justify="flex-start" spacing={1}>
      <Grid item xs={'auto'}>
        <Text variant="medium" color="secondary">
          {title}
        </Text>
      </Grid>

      <Grid item xs={12}>
        <HorizontalScroll>
          {data.map((element, index) => (
            <div key={index}>
              <Image
                onClick={() => history.push()}
                src={getImagePath(element, 'portrait_medium')}
              />

              <Legend>{getNameOrTitle(element)}</Legend>
            </div>
          ))}
        </HorizontalScroll>
      </Grid>
    </MainContainer>
  )
}

Carousell.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
}

export default Carousell
