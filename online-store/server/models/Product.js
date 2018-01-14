const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: [true, 'Title is required!'],
        minlength: [3, 'Title must be at least 3 characters long!']
    },
    model: {
        type: mongoose.Schema.Types.String,
        minlength: [3, 'Model must be at least 3 characters long!'],
        required: [true, 'Model is required!'],
        unique: true
    },
    description: {
        type: mongoose.Schema.Types.String,
        minlength: [10, 'Description must be at least 10 symbols long.']
    },
    price: {
        type: mongoose.Schema.Types.Number,
    },
    category: {
        type: ObjectId, ref: 'Category'
    },
    image: {
        type: mongoose.Schema.Types.String,
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;