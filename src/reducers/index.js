import {combineReducers} from 'redux';
import Bookreducers from './reducers_book';
import ActiveBook from './reducers_activebook';

export const rootReducer=combineReducers({
   books:Bookreducers,
   activeBook:ActiveBook
});


