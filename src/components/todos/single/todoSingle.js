import {useEffect, useState} from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function ToDoSingle(props){

	const completeClickEvent = (e) => {
		e.target.checked = !!e.target.checked;
		//TO DO: Set checked to state
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
              	defaultChecked={props.itemData.checked} 
              	/>
          </ListItemAvatar>
          {
          	(props.itemData.checked ? <strike>
          		<ListItemText
            		primary={props.itemData.title}
            		//secondary="Secondary text"
          		/>
          	</strike> :
          	<ListItemText
            	primary={props.itemData.title}
            	//secondary="Secondary text"
          	/>)
          }

        </ListItem>
	)

}