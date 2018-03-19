import React from 'react';
import { Link } from 'react-router-dom';

function Blog () {
  return (
    <React.Fragment>
      <h1>Welcome</h1>
      <Link to='/'>Home</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/about'>About Me</Link>
      <Link to='/contact'>Contact Me</Link>
    </React.Fragment>
  );
};

export default Blog;