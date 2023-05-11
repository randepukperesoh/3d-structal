import {configureStore} from '@reduxjs/toolkit'
import sliceReducer from './Slice'
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
    reducer:{
        nodes: sliceReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})