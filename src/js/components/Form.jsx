// src/js/components/Form.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid';
import { addArticle } from '../actions/index';

class ConnectedForm extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  };

  constructor() {
    super();

    this.state = {
      title: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;

    if (!title || title.length === 0) {
      return;
    }
    const id = uuidv1();

    this.props.addArticle({ title, id });
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;
    const { message } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div>{message}</div>
        <button type='submit' className='btn btn-success btn-lg'>
          SAVE
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { message: state.message };
};

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
