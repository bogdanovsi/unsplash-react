import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import createRootReducer from './reducers'

export const history = createBrowserHistory()

const isDevBuild = !process.env.NODE_ENV || process.env.NODE_ENV === 'production';

export default function configureStore() {
    const mergeMiddleware = applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history)
    );
  
    const store = isDevBuild ? createStore(
      createRootReducer(history),
      mergeMiddleware
    ) : createStore(
      createRootReducer(history),
      composeWithDevTools(
        mergeMiddleware
      )
    );
  
    return store
}