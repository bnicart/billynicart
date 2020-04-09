import React from 'react';

import './Country.css';

export default class Country extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      country: {},
      covid: {}
    };
  }

  componentDidMount() {
    this.setState({
      country: this.props.data,
      covid: this.props.covid
    });
  }

  handleClick() {
    let data = this.state.covid;

    if (data) {
      let lastUpdatedAt = (new Date(data.lastUpdated)).toString().split(' (Philippine Standard Time)')[0]

      alert(`
        ===COVID-19 DATA===
        Last Updated: ${lastUpdatedAt}
        Country: ${data.country}
        Total Confirmed: ${data.totalConfirmed}
        Total Deaths: ${data.totalDeaths}
        Total Recovered: ${data.totalRecovered}
      `);
    } else {
      alert(`No COVID-19 data for ${this.state.country.name}`)
    }
  }

  render() {
    const { country } = this.state;
    if (!country) {
      return <div>No Country Selected...</div>
    }
    return (
      <div className="country" onClick={this.handleClick.bind(this)}>
        <p className="country-name">
          {country.name}
        </p>
        <small className="country-capital">{country.capital}</small>
        <img src={country.flag} width="auto" height="100" alt={`${country.name}'s flag`} />
      </div>
    );
  }
}
