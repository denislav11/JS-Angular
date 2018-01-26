const Order = require('../models/Order');

module.exports = {
    createOrder: async (req, res) => {
        let body = req.body;
        console.log(body);

        try {
            await Order.create(body);
            console.log(body);
            return res.status(201).json({
                success: true,
                message: "Your order has been placed."
            });
        } catch (err) {
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
            let data = await Order.find({});

            return res.status(200).json({
                success: true,
                data
            });
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: err
            });
        }
    }
}