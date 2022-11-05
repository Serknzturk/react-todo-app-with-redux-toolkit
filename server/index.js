const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8081;


app.use(cors());

app.get('/api/todos', (req, res) => {
	res.send('ALL TO DOS');
});

app.post('/api/todo-add', (req,res)=> {
	res.send('TO DO ADDED')
});

app.post('/api/todo-remove', (req,res)=> {
	res.send('TO DO REMOVED')
});


app.listen(PORT, ()=>{
	console.log('Server is active on port '+PORT);
});

module.exports = app;