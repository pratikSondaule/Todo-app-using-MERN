import { IconButton, TextField } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

const AddTodo = () => {
    const [input, setInput] = React.useState({ todo: '' })

    const handleChange = (e) => {
        setInput({ todo: e.target.value });
    }

    const addTodo = async (e) => {
        e.preventDefault()

        const { data } = await axios.post('http://localhost:8000/todo', { todo: input.todo });
        if (data) {
            console.log("Todo added successfully ", data);
            window.location.reload()
        } else {
            console.log("Error in adding todo");
        }

    }
    return (
        <>
            <form className='form' onSubmit={addTodo}>
                <div className='flex'>
                    <TextField
                        id="outlined-basic"
                        label="Add Todo"
                        variant="outlined"
                        name='todo'
                        value={input.todo}
                        onChange={handleChange}
                        sx={{ width: '580px', margin: '30px 0' }}
                        className='input'
                        required
                    />
                    <IconButton sx={{ backgroundColor: '#582372', color: 'white' }} className='btn' type='submit'>
                        <AddIcon fontSize='large' />
                    </IconButton>
                </div>
            </form>
        </>
    )
}

export default AddTodo
