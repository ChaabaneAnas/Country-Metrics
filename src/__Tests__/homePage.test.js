import React from 'react'
import { render } from '@testing-library/react';
import Home from '../Components/homePage';
import { Provider } from 'react-redux';
import store from '../Redux/storeConfig'
import { BrowserRouter } from 'react-router-dom';
it('homePage renders correctly', () => {
 const view = render(<Provider store={store}><BrowserRouter><Home/></BrowserRouter></Provider>)
 expect(view).toMatchSnapshot()
})