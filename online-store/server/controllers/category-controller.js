const Category = require('../models/Category');

module.exports = {
    createCategory: async (req, res) => {
        const body = req.body;
        try {
            const category = await Category.create(body);

            return res.status(200).json({
                success: true,
                message: 'Category created successfully!'
            });
        } catch (er) {
            if (er.name === 'MongoError' && er.code === 11000) {
                return res.status(400).json({
                    success: false,
                    message: 'Title already taken!'
                });
            }
            return res.status(400).json({
                success: false,
                message: er
            });
        }
    },
    getAllCategories: async (req, res) => {
        try {
            let categories = await Category.find({});
            return res.status(200).json({
                success: true,
                data: categories
            });
        } catch (er) {
            return res.status(400).json({
                success: false,
                message: 'Something gone wrong!'
            });
        }
    },
    getCategoryById: async (req, res) => {
        let id = req.params.id;
        try {
            let category = await Category.findById(id);
            return res.status(200).json({
                success: true,
                data: category
            })
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: err
            })
        }
    },
    editCategory: async (req, res) => {
        let body = req.body;
        try {
            let updated = await Category.findOneAndUpdate({ _id: body._id }, body);
            return res.status(200).json({
                success: true,
                message: 'Category updated successfully!'
            })
        } catch (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(400).json({
                    success: false,
                    message: 'Title already taken!'
                });
            }
            return res.status(400).json({
                success: false,
                message: err
            })
        }
    },
    deleteCategoryById: async (req, res) => {
        let id = req.params.id;
        try {
            await Category.findByIdAndRemove(id);

            return res.status(200).json({
                success: true,
                message: 'Category deleted!'
            });
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: 'Something gone wrong!'
            });
        }
    }
}