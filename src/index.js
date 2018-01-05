import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

// const todoChangeHandler = (val) => 
// 	store.dispatch(updateCurrent(val))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('root'));

registerServiceWorker();
