import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch} from 'react-redux';
import Container from '@mui/material/Container';
import {loadToDos} from './features/toDoList/toDoListSlice.js';
import ToDoList from './features/toDoList/ToDoList.js';
import ToDoAdd from './features/toDoAdd/ToDoAdd.js';

function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadToDos());
    }, [dispatch]);


    return (
        <Container maxWidth="md">
            <header className="App-header">
                <h1 className="main-title">ToDo List</h1>
            </header>
            <ToDoAdd />
            <ToDoList />
        </Container>
    );
}

export default App;
