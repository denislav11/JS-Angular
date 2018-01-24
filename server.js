const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
console.log('HERE' + env);
require('./config/database')(config);
const app = require('express')();
require('./config/express')(app);
require('./config/routes')(app);
require('./config/passport')();
app.listen(config.port);