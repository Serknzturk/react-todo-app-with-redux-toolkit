import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {selectSingleToDo, singleToDoUpdate} from './toDoSingleSlice.js';
import {singleToggleCheck} from '../toDoList/toDoListSlice.js';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function ToDoSingle(props){

    const dispatch = useDispatch();
    const singleToDo = useSelector(selectSingleToDo(props.itemData.id));

	const completeClickEvent = (e) => {
        dispatch(singleToDoUpdate(singleToDo));
	}

	return (
		<ListItem id={singleToDo.id} divider={true}
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon sx={{color:'red'}} />
            </IconButton>
          }
        >
          <ListItemAvatar>
              <Checkbox aria-label="Completed" 
              	onClick={(e)=>{completeClickEvent(e)}} 
              	checked={singleToDo.checked} 
              	/>
          </ListItemAvatar>
          {
          	(singleToDo.checked ? <strike>
          		<ListItemText
            		primary={singleToDo.title}
            		//secondary="Secondary text"
          		/>
          	</strike> :
          	<ListItemText
            	primary={singleToDo.title}
            	//secondary="Secondary text"
          	/>)
          }

        </ListItem>
	)

}