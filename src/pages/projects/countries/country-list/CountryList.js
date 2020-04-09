import React from 'react';
import Country from '../country/Country';
import CountrySearch from '../country-search/CountrySearch';

import './CountryList.css';

export default class CountryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      countries: [],
      covidData: [],
      query: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({query: e.target.value || ''});
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    await this.loadCountries();
    await this.loadCountriesCovidData();
  }

  loadCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(result => {
      this.setState({
        countries: result
      });
    });
  }

  loadCountriesCovidData() {
    fetch('https://api.coronatracker.com/v3/stats/worldometer/country')
    .then(res => res.json())
    .then(result => {
      this.setState({
        covidData: result,
        isLoading: false
      });
    });
  }

  getCountryCovidData(countryCode) {
    return this.state.covidData.find(data => data.countryCode === countryCode);
  }

  render() {
    const { isLoading, countries, query } = this.state;
    let filteredCountries = [];
    filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(query.toLowerCase())
    });

    if (isLoading) {
      return <div className="center">Country list is loading...</div>
    } else {
      return (
        <div className="country-list-container">
          <CountrySearch handleSearch={this.handleSearch} />
          <p><small>{ filteredCountries.length } countries found...</small></p>
          {
            filteredCountries.map((country) => {
              return <Country data={country} covid={this.getCountryCovidData(country.alpha2Code)} key={country.name} />;
            })
          }
        </div>
      );
    }
  }

}
