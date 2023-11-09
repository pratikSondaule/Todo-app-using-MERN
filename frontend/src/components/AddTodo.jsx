import { IconButton, TextField } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const AddTodo = () => {
    return (
        <>
            <form className='form'>
                <div className='flex'>
                    <TextField
                        id="outlined-basic"
                        label="Add Todo"
                        variant="outlined"
                        sx={{ width: '580px', margin: '30px 0' }}
                    />
                    <IconButton sx={{ backgroundColor: '#582372', color: 'white' }} className='btn'>
                        <AddIcon fontSize='large' />
                    </IconButton>
                </div>
            </form>
        </>
    )
}

export default AddTodo
