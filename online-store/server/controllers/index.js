const user = require('./user-controller');
const category = require('./category-controller');
const product = require('./product-controller');
const order = require('./order-controller');
const image = require('./image-controller');

module.exports = {
    user,
    image,
    category,
    product,
    order
};