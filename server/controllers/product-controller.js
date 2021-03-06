const Product = require('../models/Product');
const Category = require('../models/Category');

module.exports = {
    createProduct: async (req, res) => {
        let body = req.body;

        try {
            let product = await Product.create(body);
            if (product.category !== null) {
                let category = await Category.findByIdAndUpdate(product.category,
                    { $push: { products: product._id } });
            }

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
        let query = req.querymen;
        let q = query.query;

        if (Object.keys(q).length !== 0) {
            if (q['category']) {
                q['category'] = q['category'].replace(/\s/g, '');
            } else if (q['title']) {
                q['title'] = { "$regex": q['title'], "$options": "i" };
            }
        }
        try {
            let products = await Product.find(query.query, query.select, query.cursor);

            return res.status(200).json({
                success: true,
                data: products
            })
        } catch (err) {
            return res.status(400).json({
                success: true,
                message: 'Something gone wrong!'
            })
        }
    },
    getProductById: async (req, res) => {
        let id = req.params.id;
        try {
            let product = await Product.findById(id);

            return res.status(200).json({
                success: true,
                data: product
            })
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: err
            });
        }
    },
    editProductById: async (req, res) => {
        let body = req.body;

        let id = body._id;
        try {
            let product = await Product.findByIdAndUpdate(id, body);

            if (product.category !== null) {
                let category = await Category.findByIdAndUpdate(product.category,
                    { $push: { products: product._id } });
            }

            return res.status(200).json({
                success: true,
                message: 'Product edited successfully!'
            });
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
            });
        }
    },
    deleteProductById: async (req, res) => {
        let id = req.params.id;

        try {
            let product = await Product.findByIdAndRemove(id);
            let categoryId = product.category;

            await Category.findByIdAndUpdate(categoryId, {
                $pull: { 'products': id }
            });

            return res.status(200).json({
                success: true,
                message: 'Product deleted successfully.'
            });
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: err
            });
        }
    }
}