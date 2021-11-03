import * as Page from './pages';
import { Footer, Navbar, SearchBox } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
          <Page.SearchPage />
        </Route>
        <Route path='/covid-19'>
          <Page.Covid />
        </Route>
        <Route path='/saved'>
          <Page.Saved />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
