import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import PostList from './containers/PostList'
import { routerPath } from './common/appConfig'

function App() {
  return (
    <main data-testid='app'>
      <Router>
        <Route path={routerPath.root}>
          <PostList />
        </Route>
        <Redirect to={routerPath.root} />
      </Router>
    </main>
  )
}

export default App
