const { JWT_SECRET } = require('../../config')
const jwt = require('jsonwebtoken')

module.exports = (user) => {
    const payload = {
        subject: user.id,
        username: user.username,
        phoneNumber: user.phoneNumber,
    }
    const options = {
        expiresIn: '1d', 
    }
    return jwt.sign(payload, JWT_SECRET, options)
}