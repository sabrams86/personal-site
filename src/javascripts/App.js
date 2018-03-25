import { Container } from 'semantic-ui-react';
import NavMenu from './components/NavMenu';
import React from 'react';
import Router from './Router';
// import styles from './App.scss';

class App extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Container>
        <NavMenu />
        <Router />
      </Container>
    );
  }
}

export default App;
