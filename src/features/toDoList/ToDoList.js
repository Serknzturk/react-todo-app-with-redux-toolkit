import React from 'react';
import {useSelector} from 'react-redux';
import List from '@mui/material/List';
import ToDoSingle from '../toDoSingle/ToDoSingle.js';
import {selectAllToDos} from './toDoListSlice.js';


export default function ToDoList(){
	const allToDos = useSelector(selectAllToDos);
	const {onLoading} = useSelector((state)=>state.allToDos);

	if(onLoading){
		return (
			<div>Loading....</div>
		);
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