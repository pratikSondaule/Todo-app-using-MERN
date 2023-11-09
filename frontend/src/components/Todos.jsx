import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import axios from 'axios';
import { IconButton, Modal } from '@mui/material';
import EditTodo from './EditTodo';

const Todos = () => {
    const [todos, setTodos] = React.useState([]);
    const [editTodo, setEditTodo] = React.useState({});
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchTodos = async () => {
        const { data } = await axios.get('http://localhost:8000/todo')

        if (data) {
            console.log("Todos fetched successfully ", data);
            setTodos(data.todos)
        } else {
            console.log("Error");
        }
    }

    const deleteTodo = async (id) => {
        const { data } = await axios.delete(`http://localhost:8000/todo/delete/${id}`)
        if (data) {
            console.log(data.msg);
            fetchTodos();
        } else {
            console.log("Error in deleting data");
        }
    }

    const handleEdit = (todo) => {
        handleOpen()
        setEditTodo(todo)
    }
    React.useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <>
            <div className='container'>
                <ul>
                    {
                        todos && todos.map((todo, index) => {
                            return (
                                <li key={index}>
                                    <div className='flex'>
                                        <div>
                                            <input type='checkbox' />
                                            <span>
                                                {todo.todo}
                                            </span>
                                        </div>
                                        <div>
                                            <IconButton
                                                sx={{ backgroundColor: '#582372', color: 'white' }}
                                                className='edit'
                                                onClick={() => handleEdit(todo)}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton
                                                sx={{ backgroundColor: 'red', color: 'white' }}
                                                className='delete'
                                                onClick={() => deleteTodo(todo._id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

            {/* Edit Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <EditTodo handleClose={handleClose} todos={editTodo} fetchTodos={fetchTodos} />
                </div>
            </Modal>
        </>
    )
}

export default Todos
