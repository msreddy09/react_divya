import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

const Todo = () => {
    const [todoText, setTodoText] = useState('');
    const [count, setCount] = useState(0);

    const [todos, setTodos] = useState([]);
    const [buttonDisabeled, setButtonDisabled] = useState(false)

    const handleTodoTextChange = (e) => {
        const { value } = e.target
        setTodoText(value)
    }
    const label = { inputProps: { 'aria-label': '' } };

    const handleAddTodo = () => {
        const todoObj = {
            name: todoText,
            completed: false
        }
        todos.push(todoObj);
        setTodos([...todos]);
        setTodoText('');

    }

    const handleDeleteTodo = (idx) => {
        todos.splice(idx, 1);
        setTodos([...todos]);
    }

    const handleTodoChange = (idx) => {
       const tempTodos = [...todos];
       tempTodos[idx].completed = !tempTodos[idx].completed;
       setTodos([...tempTodos]);
    }

    const getTodosCount = () => {

        return todos.filter(todo => !todo.completed).length
    }

    const handleDeleteCompletedTodo = () => {
        const tempTodos = [...todos];
        const remainingTodos =  tempTodos.filter(todo => !todo.completed);
        setTodos([...remainingTodos]);
    }

    useEffect(()=> {
        if(!todos.length) {
            setButtonDisabled(true);
        }else {
            setButtonDisabled(false);
        }
    }, [todos])

    return (
        <Card variant="outlined">
            <Button onClick ={() => setCount(count+1)}>Count {count}</Button>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Todo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    To maintain todos every day To maintain todos every day To maintain todos every day
                </Typography>

                <TextField id="todo-input" label="Enter Todo" variant="standard" fullWidth value={todoText} onChange={handleTodoTextChange} />
                <Button onClick={handleAddTodo}> Add Todo</Button>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <List>
                        {todos.map((todo, idx) => {
                            return (<ListItem disablePadding key={idx}>
                                <Checkbox {...label} onChange={() => handleTodoChange(idx)} checked={todo.completed} />
                                <ListItemText primary={todo.name} className={todo.completed === true? 'completed-todo': ''} />
                                <IconButton aria-label="delete" onClick={() => handleDeleteTodo(idx)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>)
                        })}
                    </List>
                </Box>

            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleDeleteCompletedTodo} disabled={buttonDisabeled}>Delete Completed Todos</Button>
                {!buttonDisabeled && <Typography size="small">Todos Remaining: {getTodosCount()}</Typography>}
            </CardActions>
        </Card>
    )

}

export default Todo

