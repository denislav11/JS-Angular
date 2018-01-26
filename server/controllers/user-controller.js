const encryption = require('../util/encryption');
const uid = require('rand-token').uid;
const User = require('mongoose').model('User');

module.exports = {
    registerPost: async (req, res) => {
        const reqUser = req.body;
        const salt = encryption.generateSalt();
        const hashedPass =
            encryption.generateHashedPassword(salt, reqUser.password);
        try {
            const user = await User.create({
                name: reqUser.name,
                hashedPass,
                salt,
                email: reqUser.email,
                address: reqUser.address,
                phone: reqUser.phone,
                roles: ['user']
            });
            return res.status(200).json({
                success: true,
                message: "Registered successfully!",
                user: user
            });
        } catch (e) {
            let messages = [];
            for (let er in e.errors) {
                messages.push(e.errors[er].message);
            }
            if (messages.length === 0) {
                if (e.name === 'MongoError' && e.code === 11000) {
                    messages.push('This email is already taken.');
                } else {
                    messages.push(e.message);
                }
            }
            return res.status(400).json({
                success: false,
                messages
            });
        }
    },
    logout: (req, res) => {
        req.logout();
        return res.json({
            success: true,
            message: "Logouted successfully!"
        })
    },
    loginPost: async (req, res) => {
        const reqUser = req.body;
        try {
            const user = await User.findOne({ email: reqUser.email });
            if (!user) {
                errorHandler('Invalid user data');
                return;
            }
            if (!user.authenticate(reqUser.password)) {
                errorHandler('Invalid user data');
                return;
            }
            req.logIn(user, (err, userData) => {
                if (err) {
                    errorHandler(err);
                } else {
                    let token = uid(16);
                    return res.status(200).json({
                        success: true,
                        message: 'Logged in successfully!',
                        user,
                        token
                    });
                }
            });
        } catch (e) {
            errorHandler(e);
        }

        function errorHandler(e) {
            return res.status(400).json({
                success: false,
                message: e
            });
        }
    },
    getUserById: async (req, res) => {
        let id = req.params.id;
        try {
            let user = await User.findById(id);

            return res.status(200).json({
                success: true,
                data: user
            });
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: err
            })
        }
    }
};