import React from "react";
import { render } from "@testing-library/react";
import Details from "../Components/details";
import { Provider } from "react-redux";
import store from '../Redux/storeConfig'



it('Header should render correctly', () => {
const view = render(<Provider store={store}><Details/></Provider>)
expect(view).toMatchSnapshot()
} )