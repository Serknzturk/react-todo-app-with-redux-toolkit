import {createAsyncThunk} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {selectAllToDos} from '../toDoList/toDoListSlice.js';

export const singleToDoUpdate = createAsyncThunk(
	'allToDos/singleToDo',
	async (from, thunkAPI) => {
		const data = await fetch('//localhost:8081/api/todo-check',{
			method: 'POST', // or 'PUT'
			headers: {
			  'Content-Type': 'application/json',
			},
			body:JSON.stringify(from)
		});
		let json = await data.json();
		return json;
	}
);

export const singleSliceSettings = {
	extraReducers: (builder) => {
		builder.
			addCase(singleToDoUpdate.fulfilled, (state, action) => {
				const singleState = state.todos.filter(todo=>todo.id === action.payload.id)[0];
				singleState.checked = action.payload.checked;
			});
	}
};

export const selectSingleToDo = id => (state) => {
	const todos = useSelector(selectAllToDos);
	return todos.filter(todo=>todo.id === id)[0];
}