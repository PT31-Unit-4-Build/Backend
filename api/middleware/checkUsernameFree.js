const { findBy } = require('../users/users-model')

module.exports = async (req, res, next) => {
    try {
        const users = await findBy({ username: req.body.username })
        if(!users.length) {
            next()
        } else {
            next({ status: 422, message: 'username taken'})
        }
    } catch(err) {
        next(err)
    }
}