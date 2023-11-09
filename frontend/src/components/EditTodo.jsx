import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'

const EditTodo = ({ handleClose, todos, fetchTodos }) => {
    const [input, setInput] = React.useState({ todo: todos.todo });

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((prev) => ({ ...prev, [name]: value }))
    }

    const editTodo = async (e) => {
        e.preventDefault();
        const data = await axios.put(`https://todo-4gan.onrender.com/todo/${todos._id}`, { todo: input.todo || '' });

        if (data) {
            console.log(data);
            handleClose();
            fetchTodos();
        } else {
            console.log("Error in updating ", error);

        }
    }

    React.useEffect(() => {
        setInput({ todo: todos.todo });
    }, [todos])
    return (
        <>

            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRadius: '8px',
                padding: '30px'
            }}>
                <Typography variant='h6'>Edit Todo</Typography>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onSubmit={editTodo}
                >
                    <TextField margin='normal' label="Todo" variant="outlined" name='todo' value={input.todo} sx={{ width: '250px' }} onChange={handleChange} />
                    <Button type='submit' variant="contained" sx={{ backgroundColor: "#582372", color: "white", width: '100px' }} className='btn'>Edit</Button>
                </form>
            </Box>
        </>
    )
}

export default EditTodo
