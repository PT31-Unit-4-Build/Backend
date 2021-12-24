const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config/index')

module.exports = (req, res, next) => {
    const token = req.headers.authorization 

    if(!token) {
        res.status(404).json({
            message: 'Missing token'
        })
    } else {
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if(err) {
                res.status(401).json({
                    message: 'Invalid token', 
                    ...err.message
                })
            } else {
            req.decodedToken = decodedToken
            next()
            }
        })
    }
}