import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ToDoSingle from '../toDoSingle/ToDoSingle.js';
import {loadToDos} from './toDoListSlice.js';
import {selectAllToDos} from './toDoListSlice.js';
import ToDoListSkeleton from '../../components/skeleton/ToDoListSkeleton.js';
import ListLoadingError from '../../components/errors/ListLoadingError.js';


export default function ToDoList(){
	const allToDos = useSelector(selectAllToDos);
	const dispatch = useDispatch();
	const {onLoading, hasError, errorMessage} = useSelector((state)=>state.allToDos);

	if(onLoading){
		return (
			<ToDoListSkeleton />
		);
	}

	if(hasError){
		return (
			<>
				<ListLoadingError>{errorMessage}</ListLoadingError>
				<Box direction="row" spacing={2} textAlign="center" marginTop="15px">
					<Button variant="contained" onClick={()=>dispatch(loadToDos())}>Load Tasks Again</Button>
				</Box>
			</>
		)
	}

	return (
		<List sx={{border:1, borderRadius:1,borderColor:'#e0e0e0', padding:0, marginTop:6}}>
			{
				allToDos.map(
					(item)=>(
						<ToDoSingle key={item.id} itemData={item} />
					)
				)
			}
		</List>
	);
}