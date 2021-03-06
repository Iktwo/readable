import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { BrowserRouter, withRouter } from 'react-router-dom';

const logger = store => next => action => {
    console.group(action.type);
    console.info('Dispatching:', action);
    let result = next(action);
    console.log('New state:', store.getState());
    console.groupEnd(action.type);
    return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(logger)
    )
);

const NonBlockApp = withRouter(App);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <NonBlockApp/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
