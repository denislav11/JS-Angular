module.exports = {
    development: {
        port: process.env.PORT || 3000,
        dbPath: process.env.MONGODB_URI
    },
    production: {}
};