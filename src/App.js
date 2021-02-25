import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
// Others
import * as colors from './constants/colors'
// Components
import Landing from './pages/landing/index'
import SignUp from './pages/signup/index'

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
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </Canvas>
  )
}

export default App