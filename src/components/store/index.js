import {configureStore} from '@reduxjs/toolkit'
import sliceReducer from './Slice'

export default configureStore({
    reducer:{
        nodes: sliceReducer,
    },
})