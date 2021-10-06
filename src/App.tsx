import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import PostList from './containers/PostList'
import { routerPath } from './common/appConfig'
import { CssBaseline, theme } from './common/styled'

const Main = styled.main`
  background-color: ${(props) => props.theme.color.main};
  min-height: 100vh;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main data-testid='app'>
        <Router>
          <Route path={routerPath.root}>
            <PostList />
          </Route>
          <Redirect to={routerPath.root} />
        </Router>
      </Main>
    </ThemeProvider>
  )
}

export default App
