const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: [true, 'Title is required!'],
        minlength: [3, 'Title must be at least 3 symbols long!'],
        unique: true,
        unique: 'This title is already used!'
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    }]
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;