const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    }
});

const TodoModel = mongoose.model('Todo', todoSchema);
module.exports = TodoModel;