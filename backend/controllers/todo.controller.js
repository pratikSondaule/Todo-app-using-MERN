const TodoModel = require('../models/todo.model');

const addTodo = async (req, res) => {
    try {
        const { todo } = req.body;

        if (!req.body) {
            return res.status(400).json({ msg: "Please add a todo" });
        }

        const newTodo = await TodoModel({ todo });
        await newTodo.save();
        return res.status(201).json({ msg: "Todo added successfully!", newTodo });

    } catch (error) {
        return res.status(500).json({ err: "Server error", error })
    }
}

const editTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await TodoModel.findByIdAndUpdate({ _id: id }, { ...req.body }, { new: true });

        if (!todo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        await todo.save();

        return res.status(200).json({ msg: "Todo edited successfully", todo });

    } catch (error) {
        return res.status(500).json({ err: "Server error", error });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await TodoModel.findByIdAndDelete({ _id: id });

        if (!todo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        return res.status(200).json({ msg: "Todo deleted successfully" });
    } catch (error) {
        return res.status(500).json({ err: "Server error", error });
    }
}

const getAllTodos = async (req, res) => {
    try {
        const todos = await TodoModel.find();

        if (!todos) {
            return res.status(404).json({ msg: "No todos details found" })
        }

        return res.status(200).json({ msg: "Todos found successfully", todosCount: todos.length, todos });

    } catch (error) {
        return res.status(500).json({ err: "Server error", error });
    }
}

module.exports = {
    addTodo,
    editTodo,
    deleteTodo,
    getAllTodos
}