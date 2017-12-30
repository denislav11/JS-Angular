const Category = require('mongoose').model('Category');

module.exports = {
    categoryPost: async (req, res) => {
        const reqBody = req.body;

        try {
            const category = await Category.create({
                title: reqBody.title
            });

            return res.status(200).json({
                message: `Category ${reqBody.title} created successfully!`,
                success: true
            });
        } catch (e) {
            if (e.name === 'MongoError' && e.code === 11000) {
                return res.status(400).json({
                    success: false,
                    message: 'Category title already taken! '
                })
            }
            return res.status(400).json({
                success: false,
                message: e.message
            })
        }
    },
    categoryGet: async (req, res) => {
        return res.status(200).json(await Category.find({}))
    }
};