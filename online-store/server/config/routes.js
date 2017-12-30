const controllers = require('../controllers');

module.exports = app => {
    app.post('/register', controllers.user.registerPost);
    app.post('/logout', controllers.user.logout);
    app.post('/login', controllers.user.loginPost);

    app.post('/category', controllers.category.categoryPost);
    app.get('/category', controllers.category.categoryGet);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};