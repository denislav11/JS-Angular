const controllers = require('../controllers');
const querymen = require('querymen');

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

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};