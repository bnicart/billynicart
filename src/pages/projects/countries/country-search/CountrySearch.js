import React from 'react';

import './CountrySearch.css';

export default class CountrySearch extends React.Component {
  render() {
    return (
      <div className="country-search center">
        <input type="text" placeholder="Search country..." onChange={this.props.handleSearch} className="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300" />
      </div>
    );
  }
}
