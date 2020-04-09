import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-test-renderer';

import CountryList from './CountryList';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('displays a loading screen', () => {
  act(() => {
    ReactDOM.render(<CountryList />, container);
  });
  const loadingDiv = container.querySelector('div[class="center"]')
  expect(loadingDiv.textContent).toBe('Country list is loading...')
});

describe('CountryList Component', () => {
  it('renders the component', () => {
    const wrapper = shallow(<CountryList />);

    expect(wrapper.exists()).toBe(true);
  });
});
