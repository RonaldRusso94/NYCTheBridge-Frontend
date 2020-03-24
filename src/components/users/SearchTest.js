import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchTest extends Component {
  state = {
    text: '',
    SearchTest: false
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onClick = e => this.setState({ SearchTest: true });

  render() {
    console.log(this.state.searchTest);
    if (this.state.SearchTest === true) {
      return (
        <div>
          <h1>!!!!!!!</h1>
          <form onSubmit={this.onSubmit} className='form'>
            <input
              type='text'
              name='text'
              placeholder='Search Users...'
              value={this.state.text}
              onChange={this.onChange}
              onClick={this.onClick}
            />
            <input
              type='submit'
              value='Search'
              className='btn btn-dark btn-block'
            />
          </form>
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.onSubmit} className='form'>
            <input
              type='text'
              name='text'
              placeholder='Search Users...'
              value={this.state.text}
              onChange={this.onChange}
              onClick={this.onClick}
            />
            <input
              type='submit'
              value='Search'
              className='btn btn-dark btn-block'
            />
          </form>
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        </div>
      );
    }
  }
}

export default SearchTest;
