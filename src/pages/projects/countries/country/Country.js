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

  render() {
    const { country, covid } = this.state;

    if (!country) {
      return <div>No Country Selected...</div>
    }

    let covidData;
    if (covid) {
      let lastUpdatedAt = (new Date(covid.lastUpdated)).toString().split(' (Philippine Standard Time)')[0]

      covidData = <div>
        <div className="text-primary card-text">Last Updated: {lastUpdatedAt}</div>
        <div className="text-warning card-text">Daily Confirmed: {covid.dailyConfirmed}</div>
        <div className="text-warning card-text">Total Confirmed: {covid.totalConfirmed}</div>
        <div className="text-danger card-text">Daily Deaths: {covid.dailyDeaths}</div>
        <div className="text-danger card-text">Total Deaths: {covid.totalDeaths}</div>
        <div className="text-success card-text">Total Recovered: {covid.totalRecovered}</div>
      </div>
    } else {
      covidData = <div>No COVID-19 data for {this.state.country.name}</div>
    }

    let notifyMe = <div className="text-center">
      <hr />
      <div>Want to get notified of new cases?</div>
      <div><a href="https://covidalertph.com/" rel="noreferrer noopener" target="_blank">Subscribe here!</a></div>
    </div>

    return (
      <div className="country col-md-2">
        <div className="card">
          <img src={country.flag} className="card-img-top" alt={`${country.name}'s flag`} />
          <div className="card-body">
            <h5 className="card-title">{ country.name } ({ country.capital })</h5>
            <hr />
            { covidData }
            { country.alpha2Code == 'PH' ? notifyMe : '' }
          </div>
        </div>
      </div>
    );
  }
}
