import { combineReducers, ReducersMapObject } from "redux";
import { connectRouter } from "connected-react-router";

import paintersReducer from '@components/Pages/Painters/reducer';

export interface IGlobalState {
  painters: any;
}

export const createRootReducer = (history) =>
  combineReducers<IGlobalState>({
    router: connectRouter(history),

    painters: paintersReducer,
  } as ReducersMapObject<IGlobalState, any>);

export default createRootReducer;