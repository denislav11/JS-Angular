module.exports = {
    development: {
        port: process.env.PORT || 3000,
        dbPath: 'mongodb://localhost:27017/online-store'
    },
    production: {
        port: process.env.PORT || 8080,
        dbPath: process.env.MONGODB_URI || 'mongodb://localhost:27017/online-store'
    }
};