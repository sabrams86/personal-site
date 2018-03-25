import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import React from 'react';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this._handleItemClick = this._handleItemClick.bind(this);
  }

  state = { activeItem: null };

  shouldComponentUpdate() {
    return true;
  }

  _handleItemClick(target, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item header>
          {'Steve Abrams'}
        </Menu.Item>
        <Menu.Item
          active={activeItem === 'Home'}
          as={Link}
          name="Home"
          onClick={this._handleItemClick}
          to="/"
        />
        <Menu.Item
          active={activeItem === 'Work With Me'}
          as={Link}
          name="Work With Me"
          onClick={this._handleItemClick}
          to="/portfolio"
        />
        <Menu.Item
          active={activeItem === 'About Me'}
          as={Link}
          name="About Me"
          onClick={this._handleItemClick}
          to="/about"
        />
        <Menu.Item
          active={activeItem === 'Contact Me'}
          as={Link}
          name="Contact Me"
          onClick={this._handleItemClick}
          to="/contact"
        />
        <Menu.Item
          active={activeItem === 'New Post'}
          as={Link}
          name="New Post"
          onClick={this._handleItemClick}
          to="/posts/new"
        />
      </Menu>
    );
  }
}

export default NavMenu;
