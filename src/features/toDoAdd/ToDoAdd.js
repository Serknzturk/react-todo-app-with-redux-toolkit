import React from 'react';
import {useDispatch} from 'react-redux';
import {toDoAddNew} from './toDoAddSlice.js';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


export default function ToDoAdd() {
	
	const dispatch = useDispatch();

	//Avoid clicking/touching multiple times by mistake
	let isAdding = {status:false};

	const formSubmitEvent = (e) => {
		//Let's avoid page refresh
		e.preventDefault();

		if(isAdding.status) return;

		isAdding.status = true;

		dispatch(toDoAddNew({
			'title':e.target.elements.todoTitle.value,
			'checked':false,
			'isAdding':isAdding
		}));

		//Empty the value
		e.target.elements.todoTitle.value = '';
	}

	return (
		<form onSubmit={formSubmitEvent}>
			<Grid container spacing={2}>
				<Grid item xs={1}></Grid>
				<Grid item xs>
					<TextField name="todoTitle" size="small" fullWidth id="outlined-basic" label="New Task" variant="outlined" required />
				</Grid>
				<Grid item xs={2}>
					<Button type="submit" name="Add New To Do" variant="contained">Add</Button>
				</Grid>
				<Grid item xs={1}></Grid>
			</Grid>
		</form>
	)
}