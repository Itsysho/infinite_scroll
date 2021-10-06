import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import PostList from './containers/PostList'
import { routerPath } from './common/appConfig'
import { CssBaseline, theme } from './common/styled'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main data-testid='app'>
        <Router>
          <Route path={routerPath.root}>
            <PostList />
          </Route>
          <Redirect to={routerPath.root} />
        </Router>
      </main>
    </ThemeProvider>
  )
}

export default App
