import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Grid, CircularProgress } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
// Custom components
import * as colors from '../../constants/colors'
import { getMarvelItem } from '../../core/operations'
import { getImagePath, getNameOrTitle } from '../../lib/utils'
import Carousell from '../components/Carousell'
import Layout from '../components/Layout'
import withAuth from '../components/hocs/withAuth'

const MainContainer = styled(Grid)`
  height: 95%;
  margin: 20px;
  padding: 25px 15px;
  text-align: center;
  overflow-y: scroll;
`

const Image = styled.img`
  border: 2px solid ${colors.black};
  margin-right: 2px;
  cursor: pointer;
`

const Title = styled.p`
  color: ${colors.oldBrick};
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
`

const Description = styled.p`
  margin: 0;
  font-size: 0.9rem;
`

const ItemPage = () => {
  const [isItemLoaded, setIsItemLoaded] = React.useState(false)
  const [item, setItem] = React.useState({})

  const history = useHistory()
  const pathname = history.location.pathname
  const id = pathname.substr(pathname.lastIndexOf('/') + 1)
  const type = pathname.indexOf('character') >= 0 ? 'character' : 'comic'

  const typeTitle = type === 'character' ? 'Comics' : 'Characters'
  const relatedItemType = type === 'character' ? 'comic' : 'character'

  React.useEffect(async () => {
    const itemData = await getMarvelItem(id, type)
    setItem(itemData)
    setIsItemLoaded(true)
  }, [])
  return (
    <Layout>
      <MainContainer
        container
        justify="center"
        alignContent="flex-start"
        spacing={2}
        className="gradientBackground"
      >
        {isItemLoaded && item.id ? (
          <>
            <Grid item xs={12}>
              <Image src={getImagePath(item, 'portrait_xlarge')} />
            </Grid>

            <Grid item xs={12}>
              <Title>{getNameOrTitle(item)}</Title>
              <Description>{item.description}</Description>
            </Grid>

            <Grid item xs={12}>
              <Carousell
                title={typeTitle}
                type={relatedItemType}
                data={item.relatedItems}
              />
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )}
      </MainContainer>
    </Layout>
  )
}

ItemPage.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
}

export default withAuth(ItemPage)
