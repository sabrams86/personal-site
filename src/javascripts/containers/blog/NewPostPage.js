import PostForm from './PostForm';
import React from 'react';

class NewPostPage extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <PostForm />
    );
  }
}

export default NewPostPage;
