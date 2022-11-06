import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {selectSingleToDo, singleToDoUpdate, singleToDoRemove} from './toDoSingleSlice.js';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function ToDoSingle(props){

    const dispatch = useDispatch();
    const singleToDo = useSelector(selectSingleToDo(props.itemData.id));

    //Avoid clicking/touching multiple times by mistake
    const isChecking = {status:false};
    const isRemoving = {status:false};

    if(typeof singleToDo == 'undefined' || !singleToDo.hasOwnProperty('id')){
        return (<></>);
    }

	const completeClickEvent = (e) => {
        if(isChecking.status) return;

        isChecking.status = true;

        dispatch(singleToDoUpdate({...singleToDo, isChecking:isChecking}));
	}

    const removeClickEvent = (e) => {
        if(isRemoving.status) return;

        isRemoving.status = true;

        dispatch(singleToDoRemove({id:singleToDo.id, isRemoving:isRemoving}));
    }

	return (
		<ListItem id={'todo-'+singleToDo.id} divider={true}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={(e)=>removeClickEvent(e)}>
              <DeleteIcon sx={{color:'red'}} />
            </IconButton>
          }
        >
          <ListItemAvatar>
              <Checkbox aria-label="Completed"
                id={'complete-check-'+singleToDo.id} 
              	onClick={(e)=>{completeClickEvent(e)}} 
              	checked={singleToDo.checked} 
              	/>
          </ListItemAvatar>
          {
          	(singleToDo.checked ? <strike>
          		<ListItemText
            		primary={singleToDo.title}
          		/>
          	</strike> :
          	<ListItemText
            	primary={singleToDo.title}
          	/>)
          }

        </ListItem>
	)

}