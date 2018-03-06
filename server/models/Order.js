const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    data: { type: mongoose.Schema.Types.Date, default: Date.now },
    email: {
        type: mongoose.Schema.Types.String,
        minlength: [6, "Email must be at least 5 symbols."],
        match: [/^[\w]+\@[\w]+\.[\w]+$/, 'Please provide valid email!']
    },
    address: {
        type: mongoose.Schema.Types.String,
        required: [true, 'Address is required!'],
        minlength: [5, 'Address must be at least 5 symbols.']
    },
    phone: {
        type: mongoose.Schema.Types.String,
        required: [true, 'Phone is required!'],
        minlength: [10, 'Phone must be at least 10 symbols.'],
        match: [/^\+?[359|0]+\s*[ .-]*[0-9]+\s*[ .-]*[0-9]+\s*[ .-]*[0-9]+$/, 'Please provide valid phone!']
    },
    total: {
        type: mongoose.Schema.Types.Number
    },
    comment: {
        type: mongoose.Schema.Types.String
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    }],
    orderNumber: {
        type: mongoose.Schema.Types.Number
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;