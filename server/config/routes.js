const controllers = require('../controllers');
const querymen = require('querymen');
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../src/assets/img'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.replace(/\s+/g, ''));
    }
})

const upload = multer({ storage: storage });

module.exports = app => {

    //User
    app.get('/api/user/:id', controllers.user.getUserById);
    app.post('/api/register', controllers.user.registerPost);
    app.post('/api/logout', controllers.user.logout);
    app.post('/api/login', controllers.user.loginPost);

    //Category
    app.get('/api/category', controllers.category.getAllCategories);
    app.get('/api/category/:id', controllers.category.getCategoryById);
    app.post('/api/category', controllers.category.createCategory);
    app.put('/api/category', controllers.category.editCategory);
    app.delete('/api/category/:id', controllers.category.deleteCategoryById);

    //Product
    app.get('/api/product', querymen.middleware({
        category: {
            type: String,
            paths: ['category']
        }, title: {
            type: String,
            paths: ['title']
        }
    }), controllers.product.getAllProducts);
    app.get('/api/product/:id', controllers.product.getProductById);
    app.post('/api/product', controllers.product.createProduct);
    app.put('/api/product', controllers.product.editProductById);
    app.delete('/api/product/:id', controllers.product.deleteProductById);

    //Orders
    app.post('/api/order', controllers.order.createOrder);
    app.get('/api/order', querymen.middleware({
        orderNumber: {
            type: Number,
            paths: ['orderNumber']
        }, customer: {
            type: RegExp,
            paths: ['customer']
        }, address: {
            type: RegExp,
            paths: ['address']
        }, total: {
            type: Number,
            paths: ['total']
        }, phone: {
            type: RegExp,
            paths: ['phone']
        }
    }), controllers.order.getAllOrders);

    //Image
    app.post(
        "/api/upload",
        upload.array("uploads[]", 12),
        controllers.image.upload
    );

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../dist/index.html'));
    });

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};