const { findBy } = require("../users/users-model")

module.exports = async(req, res, next) => {
try{
const phoneNumber = await findBy({ phoneNumber: req.body.phoneNumber })
if(!phoneNumber.length){
    next()
} else {
    next({ status: 422, message: 'there is an account with this phone number already'})
}
} catch(err){
    next(err)
}
}