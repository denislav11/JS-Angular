const Product = require('../models/Product');
const Category = require('../models/Category');

module.exports = {
    createProduct: async (req, res) => {
        let body = req.body;
        try {
            let product = await Product.create(body);

            let category = await Category.findByIdAndUpdate(product.category,
                { $push: { products: product._id } });

            return res.status(201).json({
                success: true,
                message: 'Product created successfully!',
                data: product
            })
        } catch (err) {
            let messages = [];
            for (let er in err.errors) {
                messages.push(err.errors[er].message);
            }
            if (messages.length === 0) {
                if (err.name === 'MongoError' && err.code === 11000) {
                    messages.push('This model is already taken.');
                } else {
                    messages.push(err.message);
                }
            }
            return res.status(400).json({
                success: false,
                messages
            })
        }
    },
    getAllProducts: async (req, res) => {
        try {
            let products = await Product.find({});
            return res.status(200).json({
                success: true,
                data: products
            })
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                success: true,
                message: 'Something gone wrong!'
            })
        }
    }
}