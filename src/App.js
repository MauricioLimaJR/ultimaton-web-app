import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
// Others
import * as colors from './constants/colors'

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
      <BrowserRouter>{'Ultimaton App'}</BrowserRouter>
    </Canvas>
  )
}

export default App
