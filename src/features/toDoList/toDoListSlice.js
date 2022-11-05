import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {singleToDoUpdate, singleSliceSettings} from '../toDoSingle/toDoSingleSlice.js';

export const loadToDos = createAsyncThunk(
	'allToDos/loadToDos',
	async () => {
		const data = await fetch('//localhost:8081/api/todos',{
			method: 'GET', // or 'PUT'
			headers: {
			  'Content-Type': 'application/json',
			}
		});
		let json = await data.json();
		return json;
	}
);

const sliceSettings = {
	name:'allToDos',
	initialState:{
		todos:[],
		onLoading:false,
		errors:false
	},
	reducers:{
		singleToggleCheck:(state, action)=>{
			const item = state.todos.filter(todo=>todo.id === action.payload.id)[0];
			item.checked = action.payload.checked;
		}
	},
	extraReducers:(builder) => {
		builder.
		addCase(loadToDos.fulfilled, (state, action) => {
			state.todos = action.payload;
			state.onLoading = false;
			state.errors = false;
		});

		singleSliceSettings.extraReducers(builder);
	}

	
}

export const toDoListSlice = createSlice(sliceSettings);
export const selectAllToDos = (state) => state.allToDos.todos;
export const {singleToggleCheck} = toDoListSlice.actions;
export default toDoListSlice.reducer;