import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
// Others
import * as colors from './constants/colors'
// Components
import Landing from './pages/landing/index'
import SignUp from './pages/signup/index'
import SignIn from './pages/signin/index'
import Home from './pages/home/index'
import ItemPage from './pages/itemPage/index'

const Canvas = styled.div`
  background-color: ${colors.godGray};
  color: ${colors.white};
  height: 100vh;
  font-family: ${'!important Roboto, Regular, Helvetica'};
  overflow: hidden;
  text-align: center;
`

function App() {
  return (
    <Canvas className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/:type/:id" component={ItemPage} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </Canvas>
  )
}

export default App
