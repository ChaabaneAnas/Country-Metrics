import axios from 'axios';
import Url from '../api';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const FETCH = "DETAILSPAGE/FETCH"
export const FILTER ="DETAILSPAGE/FILTER"
export const insitalState = [];

export const  FetchCountires = createAsyncThunk(FETCH, async (name) => {
  const response = await axios.get(Url)
  return response.data.filter((country) =>
  country.region === name ? country : country.subregion === name
);
})

export default function Details(state = insitalState, action){
  const {type, payload} = action;
  console.log(action);
  switch(type){
    case "DETAILSPAGE/FETCH/fulfilled":
      return payload
    default:
      return state
    }
}