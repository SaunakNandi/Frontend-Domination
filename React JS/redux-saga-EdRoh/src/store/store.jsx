import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import catsReducer from './reducers/CatSlice'
import catSaga from "./CatSaga";

const sagaMiddleware=createSagaMiddleware()
export const store=configureStore({
    reducer:{
        cats:catsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(catSaga)