import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer'
import postReducer from './postReducer'

export default configureStore( {
    reducer: {counterReducer, postReducer}
});