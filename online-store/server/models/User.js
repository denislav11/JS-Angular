const mongoose = require('mongoose');
const encryption = require('../util/encryption');

const userSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: [true, 'Name is required.'],
        minlength: [5, 'Name must be at least 5 symbols.']
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: [true, 'Email is required!'],
        unique: true,
        unique: 'This email is already taken.',
        minlength: [6, "Email must be at least 5 symbols."],
        match: [/^[\w]+\@[\w]+\.[\w]+$/, 'Please provide valid email!']
    },
    address: {
        type: mongoose.Schema.Types.String,
        required: [true, 'Address is required!'],
        minlength: [5, 'Address must be at least 5 symbols.']
    },
    phone: {
        type: mongoose.Schema.Types.String,
        required: [true, 'Phone is required!'],
        minlength: [10, 'Phone must be at least 10 symbols.'],
        match: [/^\+?[359|0]+\s*[ .-]*[0-9]+\s*[ .-]*[0-9]+\s*[ .-]*[0-9]+$/, 'Please provide valid phone!']
    },
    hashedPass: { type: mongoose.Schema.Types.String, required: true },
    salt: { type: mongoose.Schema.Types.String, required: true },
    roles: [{ type: mongoose.Schema.Types.String }]
});

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

const User = mongoose.model('User', userSchema);

User.seedAdminUser = async () => {
    try {
        let users = await User.find();
        if (users.length > 0) return;
        const salt = encryption.generateSalt();
        const hashedPass = encryption.generateHashedPassword(salt, 'admin@admin.com');
        return User.create({
            name: 'admin',
            email: 'admin@admin.com',
            address: 'admin adresss',
            phone: '0989999969',
            hashedPass,
            salt,
            roles: ['Admin']
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = User;