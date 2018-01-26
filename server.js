const env = process.env.NODE_ENV || 'development';

const config = require('./server/config/config')[env];
console.log(config);
require('./server/config/database')(config);
const app = require('express')();
require('./server/config/express')(app);
require('./server/config/routes')(app);
require('./server/config/passport')();
app.listen(config.port);