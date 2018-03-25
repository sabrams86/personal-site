import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import React from 'react';

class PostForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            {'Title'}
          </label>
          <Field
            component="input"
            name="title"
            type="text"
          />
        </div>
        <div>
          <label>
            {'Post'}
          </label>
          <Field
            component="textArea"
            name="body"
            type="text"
          />
        </div>
        <button type="submit">
          {'Submit'}
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'postForm'
})(PostForm);
