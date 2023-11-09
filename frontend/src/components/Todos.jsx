import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import { IconButton } from '@mui/material';

const Todos = () => {

    return (
        <>
            <div className='container'>
                <ul>
                    <li>
                        <div className='flex'>
                            <div>
                                <input type='checkbox' />
                                <span>
                                    Hello World
                                </span>
                            </div>
                            <div>
                                <IconButton
                                    sx={{ backgroundColor: '#582372', color: 'white' }}
                                    className='edit'
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton sx={{ backgroundColor: 'red', color: 'white' }} className='delete'>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Todos
