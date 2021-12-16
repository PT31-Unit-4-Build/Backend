module.exports = (req, res, next) => {
    const { password, username, phoneNumber } = req.body
    if (!username) {
        next({
            status: 401,
            message: 'username required'
        })
    }
    else if (!password) {
        next({
            status: 401,
            message: 'password required'
        })
    }
    else if (!phoneNumber) {
        next({
            status: 401,
            message: 'phone number required'
        })
    } else {
        next()
    }
}