import './App.css';
import HomePage from './Pages/HomePage/HomePage'
import InitialPage from './Pages/InitialPage/InitialPage'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'
import { BrowserRouter as Router, Route, Switch, HeaderView } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/Inicio'>
          <InitialPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
