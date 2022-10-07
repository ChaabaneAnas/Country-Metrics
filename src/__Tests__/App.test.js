import React from "react"
import { render } from "@testing-library/react"
import store from'../Redux/storeConfig'
import { BrowserRouter } from "react-router-dom"
import App from '../App'
import { Provider } from "react-redux"

it('App renders correctly', () => {
  const view = render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)
  expect(view).toMatchSnapshot()
})