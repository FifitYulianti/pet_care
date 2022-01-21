const jwt = require('jsonwebtoken')
const sendMail = require('../helpers/nodemailer')
const bcrypt = require('bcryptjs')
const {User, Booking, Category, Transaction} = require('../models')

class UserController {

    static register(req, res, next) {
        const { name, email, password, noHp, address } = req.body
        User.create({ name, email, password, noHp, address })
            .then((data) => {
                res.status(201).json({
                    success: true, message: "Register Success",
                })
                sendMail(data.email, 'register', `terimakasih telah mendaftarkan akun anda dengan email ${data.email}`)
            })
            .catch((err) => {
                console.log(err);
                if (err.name === 'SequelizeValidationError') {
                    let validation = err.errors.map(el => el.message)
                    next({ status: 400, message: validation })
                } else if (err.name === 'SequelizeUniqueConstraintError') {
                    let contrainError = err.errors.map(element => element.message)
                    next({ status: 400, message: contrainError })
                } else {
                    next(err)
                }
            })
    }
    static login(req, res, next){
        const { email, password } = req.body
        User.findOne({ where: { email } })
            .then((dataUser) => {
                //console.log(dataUser);
                if (dataUser === null) {
                    next({ status: 401, message: "Invalid email/password!" })
                }
                let validatePass = bcrypt.compareSync(password, dataUser.password)
                if (dataUser && validatePass) {
                    const access_token = jwt.sign({ id: dataUser.id, name: dataUser.name }, process.env.JWT_SECRET)
                    res.status(200).json({ success: true, message: "login berhasil", access_token, email: dataUser.email});
                    sendMail(dataUser.email, 'Login Aplikasi Pet Care', `Email anda ${dataUser.email} telah login pada aplikasi Pet Care`)
                } else {
                    next({ status: 401, message: "Invalid email or password!" })
                }
            })
            .catch((err) => {
                console.log(err);
                next(err)
            })
    }
}

module.exports = UserController
