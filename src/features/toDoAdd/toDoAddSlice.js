import {createAsyncThunk} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {selectAllToDos} from '../toDoList/toDoListSlice.js';

export const toDoAddNew = createAsyncThunk(
	'allToDos/addNewToDo',
	async (from, thunkAPI) => {
		const data = await fetch('//localhost:8081/api/todo-add',{
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

export const addNewSliceSettings = {
	extraReducers: (builder) => {
		builder.
			addCase(toDoAddNew.fulfilled, (state, action) => {
				console.log(action.payload);
				state.todos = [...state.todos, action.payload];
			});
	}
};