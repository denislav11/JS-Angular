const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        unique: true,
        required: [true, 'Title is required!']
    }
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;