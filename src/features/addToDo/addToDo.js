//import DefaultButton from '../../components/buttons/default/defaultButton.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


export default function AddToDo(props) {
	
	const addClickEvent = (e) => {

	}

	return (
		<Grid container spacing={2}>
			<Grid item xs={1}></Grid>
			<Grid item xs>
				<TextField size="small" fullWidth id="outlined-basic" label="New Task" variant="outlined" />
			</Grid>
			<Grid item xs={2}>
				<Button variant="contained" onClick={(e)=>addClickEvent(e)}>Add</Button>
			</Grid>
			<Grid item xs={1}></Grid>
		</Grid>
	)
}