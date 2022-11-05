import {configureStore} from '@reduxjs/toolkit';
import allToDosReducer from './features/toDoList/toDoListSlice.js';


export default configureStore({
	reducer:{
		'allToDos':allToDosReducer
	}
})