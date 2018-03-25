import PostForm from './PostForm';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createPost } from './../../redux/posts';
class NewPostPage extends React.Component {
  propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  _handleSubmit(data) {
    const { onSubmit } = this.props;

    onSubmit(data);
  }

  render() {
    return (
      <PostForm
        onSubmit={this._handleSubmit}
      />
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  onSubmit: createPost
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPostPage);
