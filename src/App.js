import * as Page from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <Router>
      <Navbar />
      <SearchBox />
      <Switch>
        <Route exact path='/'>
          <Page.Home />
        </Route>
        <Route path='/programming'>
          <Page.Programming />
        </Route>
        <Route path='/covid-19'>
          <Page.Covid />
        </Route>
        <Route path='/saved'>
          <Page.Saved />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
