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
  border: 1px solid ${colors.black};
  cursor: pointer;
`

const Carousell = ({ title, data }) => {
  const history = useHistory()

  return (
    <MainContainer container justify="flex-start" spacing={2}>
      <Grid item xs={'auto'}>
        <Text variant="medium" color="secondary">
          {title}
        </Text>
      </Grid>

      <Grid item xs={12}>
        <HorizontalScroll>
          {data.map((element, index) => (
            <Image
              key={index}
              onClick={() => history.push()}
              src={element.img}
              width="125px"
              height="125px"
            />
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
