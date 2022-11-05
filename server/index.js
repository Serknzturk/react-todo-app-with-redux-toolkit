const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8081;

const DbManagerClass = require('./DbManager.js');
const DbManager = new DbManagerClass();


const validateToDoWithSchema = (todo) => {

}



app.use(cors());
app.use(express.json());

app.get('/api/todos', (req, res) => {
	res.send(DbManager.getItems());
});

app.post('/api/todo-check', (req,res)=>{
	const result = DbManager.checkItem(req.body);
	res.send(result);
});

app.post('/api/todo-add', (req,res)=> {
	const respond = DbManager.addItem(req.body);
	res.send(respond);
});
app.post('/api/todo-remove', (req,res)=> {
	const respond = DbManager.removeItem(req.body);
	res.send(respond);
});


app.listen(PORT, ()=>{
	console.log('Server is active on port '+PORT);
});

module.exports = app;