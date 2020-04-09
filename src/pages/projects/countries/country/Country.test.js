import React from 'react';
import ReactDOM from 'react-dom';
import Country from './Country';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Country Component', () => {
  it('renders the component', () => {
    const countryComponent = shallow(<Country />);
    const countryData = {
      name: 'Philippines',
      capital: 'Manila',
      flag: 'https://restcountries.eu/data/phl.svg'
    }
    countryComponent.setState({country: countryData});
    console.log(JSON.stringify(countryComponent));
    expect(countryComponent.exists()).toBe(true);


  });

});
