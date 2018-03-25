import { Route, Switch } from 'react-router-dom';
import AboutMePage from './containers/static-pages/AboutMePage';
import ContactPage from './containers/static-pages/ContactPage';
import NewPostPage from './containers/blog/NewPostPage';
import NoMatch from './components/NoMatch';
import PortfolioPage from './containers/portfolio/PortfolioPage';
import PostIndexPage from './containers/blog/PostIndexPage';
import React from 'react';

class Router extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Switch>
        <Route
          component={PostIndexPage}
          exact
          path="/"
        />
        <Route
          component={NewPostPage}
          exact
          path="/posts/new"
        />
        <Route
          component={AboutMePage}
          path="/about"
        />
        <Route
          component={PortfolioPage}
          path="/portfolio"
        />
        <Route
          component={ContactPage}
          path="/contact"
        />
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default Router;
