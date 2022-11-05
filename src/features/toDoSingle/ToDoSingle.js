import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {selectSingleToDo, singleToDoUpdate} from './toDoSingleSlice.js';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function ToDoSingle(props){

    const singleToDo = useSelector(selectSingleToDo(props.itemData.id));
    const dispatch = useDispatch();


    console.log(singleToDo);

	const completeClickEvent = (e) => {
		e.target.checked = !!e.target.checked;
		//TO DO: Set checked to state
        dispatch(singleToDoUpdate(singleToDo));
	}


	return (
		<ListItem divider={true}
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon sx={{color:'red'}} />
            </IconButton>
          }
        >
          <ListItemAvatar>
              <Checkbox aria-label="Completed" 
              	onClick={(e)=>{completeClickEvent(e)}} 
              	defaultChecked={singleToDo.checked} 
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