// src/js/components/List.jsx
import React from 'react';
import { connect } from 'react-redux';

const ConnectedList = ({ articles, message }) => (
  <ul className='list-group list-group-flush'>
    {articles &&
      articles.map(el => (
        <li className='list-group-item' key={el.id}>
          {el.title}
        </li>
      ))}
  </ul>
);

const mapStateToProps = state => {
  return { articles: state.articles, message: state.message };
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
