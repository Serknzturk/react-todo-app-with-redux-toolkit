import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

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
		console.log(json);
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
	reducers:{},
	extraReducers:{
		[loadToDos.pending]:(state,action) => {
			state.onLoading = true;
			state.errors = false;
		},
		[loadToDos.rejected]:(state,action) => {
			state.onLoading = false;
			state.errors = true;
		},
		[loadToDos.fulfilled]:(state,action) => {
			state.todos = action.payload;
			state.onLoading = false;
			state.errors = false;
		}
	}
}

export const toDoListSlice = createSlice(sliceSettings);
export const selectAllToDos = (state) => state.allToDos.todos;
export default toDoListSlice.reducer;