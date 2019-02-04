import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_PROJECTS', getProjects);
    yield takeEvery('ADD_PROJECTS', addProjects);
    yield takeEvery('DELETE_PROJECT', deleteProjects);
}

function* getProjects(action) {
    try {
        const serverResponse = yield axios.get('/projects');
        const nextAction = { type: 'SET_PROJECTS', payload: serverResponse.data };
        yield put(nextAction);
    } catch (error) {
        console.log('Error in GET addProjects');
        alert('Something went wrong in GET addProjects')
    }
}

function* addProjects(action) {
    try {
        yield axios.post('/projects', action.payload);
        yield put({ type: 'GET_PROJECTS' });
        console.log('action.payload', action.payload);
    } catch (error) {
        console.log('Error in POST /projects', error );
        alert('Something went wrong in saga POST');
    }
}

function* deleteProjects(action) {
    const projectId = action.payload.projectId;
    try {
        yield axios.delete(`/projects/${projectId}`);
        const nextAction = { type: 'GET_PROJECTS' };
        yield put(nextAction);
    } catch (error) {
        console.log('Error in deleting project', error);
        alert('Something went wrong in saga delete');
        
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
