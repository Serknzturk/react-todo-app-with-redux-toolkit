import List from '@mui/material/List';
import ToDoSingle from '../single/todoSingle.js';
import dbMock from '../../../db-mock.js';

export default function ToDoList(){



	return (
		<List sx={{border:1, borderRadius:1,borderColor:'#e0e0e0', padding:0, marginTop:6}}>
			{
				dbMock.map(
					(item)=>(
						<ToDoSingle key={item.id} itemData={item} />
					)
				)
			}
			
		</List>
	);
}