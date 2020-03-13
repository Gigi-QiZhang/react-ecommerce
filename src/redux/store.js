import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
//Module not found: Can't resolve 'redux-thunk'
// solved by npm install --save redux react-redux together
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
// import { fetchCollectionsStart } from './shop/shop.sagas';
import rootSaga from './root-saga';



const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// const middlewares= [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run(fetchCollectionsStart);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };