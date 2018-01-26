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
    app.get('/user/:id', controllers.user.getUserById);
    app.post('/register', controllers.user.registerPost);
    app.post('/logout', controllers.user.logout);
    app.post('/login', controllers.user.loginPost);

    //Category
    app.get('/category', controllers.category.getAllCategories);
    app.get('/category/:id', controllers.category.getCategoryById);
    app.post('/category', controllers.category.createCategory);
    app.put('/category', controllers.category.editCategory);
    app.delete('/category/:id', controllers.category.deleteCategoryById);

    //Product
    app.get('/product', querymen.middleware({
        q: {
            type: String,
            paths: ['category']
        }
    }), controllers.product.getAllProducts);
    app.get('/product/:id', controllers.product.getProductById);
    app.post('/product', controllers.product.createProduct);
    app.put('/product', controllers.product.editProductById);
    app.delete('/product/:id', controllers.product.deleteProductById);

    //Orders
    app.post('/order', controllers.order.createOrder);
    app.get('/order', controllers.order.getAllOrders);

    //Image
    app.post(
        "/upload",
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