const Order = require('../models/Order');
const querymen = require('querymen');

module.exports = {
    createOrder: async (req, res) => {
        let body = req.body;

        try {
            body.orderNumber = (await Order.count()) + 1;
            await Order.create(body);

            return res.status(201).json({
                success: true,
                message: "Your order has been placed."
            });
        } catch (err) {
            console.log(err);
            let messages = [];
            for (let er in err.errors) {
                messages.push(err.errors[er].message);
            }
            return res.status(400).json({
                success: false,
                messages
            })
        }
    },
    getAllOrders: async (req, res) => {
        try {
            let query = req.querymen;
            console.log(query);
            let totalOrders = await Order.count({})
            let data = await Order.find(query.query, query.select, query.cursor);

            return res.status(200).json({
                success: true,
                data,
                totalOrders
            });
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: err
            });
        }
    }
}