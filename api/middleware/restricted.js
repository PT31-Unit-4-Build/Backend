const { jwtSecret } = require('../../config/index')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]

        if(token) {
            jwt.verify(token, jwtSecret, (err, decodedToken) => {
                if(err) {
                    res.status(401).json({ message: 'not allowed!'})
                } else {
                    req.decodedJwt = decodedToken
                    next()
                }
            })
        } else {
            throw new Error('invalid auth data')
        }
    } catch(err) {
        next({
            status: 401,
            message: err,
            error: err.message
        })
    }
}