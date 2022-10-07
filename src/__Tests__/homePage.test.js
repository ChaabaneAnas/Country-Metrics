import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Components/homePage';
import store from '../Redux/storeConfig';

it('homePage renders correctly', () => {
  const view = render(<Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>);
  expect(view).toMatchSnapshot();
});
