import { get } from 'lodash';
import { createSelector } from 'reselect';
import mapData from 'Data/countries';

/*
  Reducer
*/

const defaultState = mapData;
const mapReducer = (state = defaultState, action) => state;

/*
  Selectors
*/

export const countriesSelector = state => get(state, 'map.countries', [])
export const infoSelector = state => get(state, 'map.info', {})

export const countriesInfoSelector = createSelector(
  countriesSelector, infoSelector,
  (countriesList, info) => countriesList.map(countrie => info[countrie])
)

export const graphListSelector = state => get(state, 'map.graphs');

export const countrieGraphsSelector = createSelector(
  graphListSelector, infoSelector,
  (graphList, info) => graphList.map(graphElem =>
    graphElem.map(countrieKey => info[countrieKey].coordinates)
  )
)

export default mapReducer;
