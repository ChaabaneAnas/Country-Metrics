import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import Url from '../api';

export const FETCH = 'DETAILSPAGE/FETCH';
export const FILTER = 'DETAILSPAGE/FILTER';
export const insitalState = [];

export const FetchCountires = createAsyncThunk(FETCH, async (name) => {
  const response = await axios.get(Url);
  return response.data.map((country) => ({ ...country, id: uuidv4() }))
    .filter((country) => (country.region === name ? country : country.subregion === name));
});

export default function Details(state = insitalState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'DETAILSPAGE/FETCH/fulfilled':
      return payload;
    default:
      return state;
  }
}
