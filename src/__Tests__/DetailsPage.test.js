import Details from '../Redux/DetailsPage/DetailsPage';

const state = [{ test1: 1 }, { test2: 2 }, { test3: 3 }];
const action = {
  type: 'DETAILSPAGE/FETCH/fulfilled',
  payload: [{ test1: 0 }, { test2: 0 }, { test3: 0 }],
};

it('gives the expected result', () => {
  expect(Details(state, action)).toEqual(action.payload);
});
