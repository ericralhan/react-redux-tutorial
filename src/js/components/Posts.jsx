import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';
export class Post extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.props.apiError}</div>
        <ul className='list-group list-group-flush'>
          {this.props.articles &&
            this.props.articles.map(el => (
              <li className='list-group-item' key={el.id}>
                {el.title}
              </li>
            ))}
        </ul>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10),
    apiError: state.apiError
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);
