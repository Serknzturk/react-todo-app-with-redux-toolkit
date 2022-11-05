import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import ToDoList from './components/todos/list/todoList.js';
import AddToDo from './features/addToDo/addToDo.js';

function App() {
  return (
    <Container maxWidth="md">
      <header className="App-header">
        <h1 className="main-title">ToDo List</h1>
      </header>
      <AddToDo />
      <ToDoList />
    </Container>
  );
}

export default App;
