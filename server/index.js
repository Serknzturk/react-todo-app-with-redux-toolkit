const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8081;

const DbManagerClass = require('./DbManager.js');
const DbManager = new DbManagerClass();


const validateToDoWithSchema = (todo) => {

}



app.use(cors());
app.use(express.json())

app.get('/api/todos', (req, res) => {
	res.send(DbManager.getItems());
});

app.post('/api/todo-add', (req,res)=> {
	console.log(req)
	DbManager.addItem(req.body);
	res.send(DbManager.getItems());
});

app.post('/api/todo-remove', (req,res)=> {
	res.send('TO DO REMOVED')
});


app.listen(PORT, ()=>{
	console.log('Server is active on port '+PORT);
});

module.exports = app;