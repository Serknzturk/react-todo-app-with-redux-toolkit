import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {selectAllToDos} from '../toDoList/toDoListSlice.js';

export const singleToDoUpdate = createAsyncThunk(
	'allToDos/singleToDo',
	async (from, thunkAPI) => {
		console.log(thunkAPI);
		const data = await fetch('//localhost:8081/api/todo-check',{
			method: 'POST', // or 'PUT'
			headers: {
			  'Content-Type': 'application/json',
			},
			body:JSON.stringify({
				"yes":"no"
			})
		});
		let json = await data.json();
		console.log(json);
		return json;
	}
);

const sliceSettings = {
	name:'allToDos/singleToDo',
	initialState:{
		checked:false,
		title:'',
		id:0,
		onLoading:false,
		errors:false
	},
	reducers:{},
	extraReducers:{
		[singleToDoUpdate.pending]:(state,action) => {
			state.onLoading = true;
			state.errors = false;
		},
		[singleToDoUpdate.rejected]:(state,action) => {
			state.onLoading = false;
			state.errors = true;
		},
		[singleToDoUpdate.fulfilled]:(state,action) => {
			state.singleToDo = action.payload.checked;
			state.onLoading = false;
			state.errors = false;
		}
	}
}

export const toDoSingleSlice = createSlice(sliceSettings);
export const selectSingleToDo = id => (state) => {
	const todos = useSelector(selectAllToDos);
	return todos.filter(todo=>todo.id === id)[0];
}
export default toDoSingleSlice.reducer;