import { combineReducers } from 'redux';
import { restaurantReducer } from './restaurant.reducer';

export const rootReducer = combineReducers({
  restaurant: restaurantReducer,
});
