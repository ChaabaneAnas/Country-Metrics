import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/storeConfig';
import App from '../App';

it('App renders correctly', () => {
  const view = render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
  expect(view).toMatchSnapshot();
});
