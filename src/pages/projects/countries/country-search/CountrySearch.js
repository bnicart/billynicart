import React from 'react';

import './CountrySearch.css';

export default class CountrySearch extends React.Component {
  render() {
    return (
      <div className="country-search center">
        <input type="text" placeholder="Search country..." onChange={this.props.handleSearch} />
      </div>
    );
  }
}
