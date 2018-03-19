import { Route, Switch } from 'react-router-dom';
import AboutMePage from './containers/static-pages/AboutMePage';
import ContactPage from './containers/static-pages/ContactPage';
import PortfolioPage from './containers/portfolio/PortfolioPage';
import PostIndexPage from './containers/blog/PostIndexPage';

import NoMatch from './components/NoMatch';
import React from 'react';
import logo from './../images/logo.svg';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={PostIndexPage} />
        <Route path='/about' component={AboutMePage} />
        <Route path='/portfolio' component={PortfolioPage} />
        <Route path='/contact' component={ContactPage} />
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
