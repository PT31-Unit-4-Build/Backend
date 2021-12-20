module.exports = (req, res, next) => {
    const { password, username, phoneNumber } = req.body
    if(!username || !password || !phoneNumber) {
        next({ status: 401, message: 'username, password and phone number required' })
    } else {
        next()
    }
}