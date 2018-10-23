import React from 'react';
import {render} from 'react-dom';
import './styles/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Root from './components/Root';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers/index';

const store=createStore(rootReducer);

render(<Provider store={store}><Root/></Provider>,document.querySelector("#main"));