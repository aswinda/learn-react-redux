import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {bindActionCreators} from 'redux'
import {updateCurrent} from './reducers/todo'

// const todoChangeHandler = (val) => 
// 	store.dispatch(updateCurrent(val))

const actions = bindActionCreators({updateCurrent}, store.dispatch)

const render = () => {
	const state = store.getState()
	ReactDOM.render(<App todos={state.todos} 
		currentTodo={state.currentTodo}
		changeCurrent={actions.updateCurrent}
		 />, 
	document.getElementById('root'));
}

render()

store.subscribe(render)

setTimeout(() => {
	store.dispatch({type: 'TODO_ADD', payload: {id: 4, name: 'New Todo', isComplete:false}})
}, 1000)
registerServiceWorker();
