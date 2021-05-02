import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
// Custom components
import Text from '../components/Text'
import * as colors from '../../constants/colors'

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

  const getImagePath = (element, variant) => {
    const url = `${element.thumbnail.path}/${variant}.${element.thumbnail.extension}`
    return url
  }

  const getLegendParsed = (element) => {
    const legend = element.name || element.title
    return legend.length > 24 ? legend.substr(0, 25) + '...' : legend
  }

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
                key={index}
                onClick={() => history.push()}
                src={getImagePath(element, 'portrait_medium')}
              />

              <Legend>{getLegendParsed(element)}</Legend>
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
