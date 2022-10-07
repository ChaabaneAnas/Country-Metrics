import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Components/header';

it('Header should render correctly', () => {
  const view = render(<BrowserRouter><Header /></BrowserRouter>);
  expect(view).toMatchSnapshot();
});
