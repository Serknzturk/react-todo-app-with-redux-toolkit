import {configureStore} from '@reduxjs/toolkit';
import allToDosReducer from './features/toDoList/toDoListSlice.js';
import singleToDoReducer from './features/toDoSingle/toDoSingleSlice.js';


export default configureStore({
	reducer:{
		'allToDos':allToDosReducer,
		'singleToDo':singleToDoReducer
	}
})