import React from 'react';
import Alert from '@mui/material/Alert';

export default function ListLoadingError(props){
	return (
		<Alert style={{marginTop:'30px'}} severity="error">Couldn't Load Tasks: {props.children}</Alert>
	)
}