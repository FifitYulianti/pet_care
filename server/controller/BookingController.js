const sendMail = require('../helpers/nodemailer')
const { User, Booking, Category, Transaction } = require('../models')
const fs = require('fs')
const { default: axios } = require('axios')
const FormData = require("form-data")

class BookingController {

    static getDataBooking(req, res, next) {
        Booking.findAll({ include: [User, Category], where: { IdUser: req.id } })
            .then(data => {
                if (data !== 0) {
                    res.status(200).json({
                        bookings: data
                    })
                } else {
                    next({ status: 404, message: "Invalid data!" })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static addBookingData(req, res, next) {
        const IdUser = req.id
        const IdCategory = +req.params.CategoryId
        const { petName, schedule, harga, imgUrl } = req.body
        let message = ''
        Booking.create({ petName, schedule, harga, IdUser, IdCategory, imgUrl })
            .then(data => {
                message = `Terima kasih, anda telah melakukan proses Booking untuk pet kesayangan anda. Grooming booking terdaftar atas nama pet ${data.petName} pada tanggal ${data.schedule}, mohon untuk datang ke outlet kami pada tanggal tersebut.`
                res.status(201).json({
                    booking: data
                })
                return User.findOne({ where: { id: IdUser } })
            })
            .then(data => {
                sendMail(data.email, 'Booking Schedule Grooming Pet Care', message)
            })
            .catch(err => {
                console.log(err);
                if (err.name === 'SequelizeValidationError') {
                    let validation = err.errors.map(el => el.message)
                    next({ status: 400, message: validation })
                } else {
                    next(err)
                }
            })
    }
    static getOneBooking(req, res, next) {
        let id = +req.params.id
        Booking.findByPk(id, { include: [User, Category] })
            .then((data) => {
                if (data === null) {
                    res.status(404).json({
                        message: `Data Booking dengan id ${id} tidak ditemukan`
                    })
                } else {
                    res.status(200).json({
                        booking: data
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static convertDataToPDF(req, res, next) {
        let id = +req.params.id
        Booking.findByPk(id, { include: [User, Category] })
            .then((data) => {
                if (data === null) {
                    res.status(404).json({
                        message: `Data Booking dengan id ${id} tidak ditemukan`
                    })
                } else {
                    var htmlContent = `<html>
                            <img src="${data.imgUrl}"
                            class="card-img-top"
                            alt="..."
                            height="190px"
                            />
                            <p class="card-title">Nama Pet : ${data.petName}</p>
                            <p class="card-text">Kategori : ${data.Category.name}</p>
                            <p class="card-text">Jadwal : ${(new Date(data.schedule)).toISOString().split('T')[0]}</p>
                            <p class="card-text">Harga : Rp ${data.harga}</p>
                            </html>`
                    fs.writeFileSync('./pdf.html', htmlContent)
                     
                    const form = new FormData()
                    form.append('instructions', JSON.stringify({
                        parts: [
                            {
                                html: "index.html",
                                "layout": { "margin": { "top": 25, "left": 20, "right": 20, "bottom": 20 } }
                            }
                        ]
                    }))
                    form.append('index.html', htmlContent)
                    axios.post('https://api.pspdfkit.com/build', form, {
                        headers: form.getHeaders({
                            'Authorization': 'Bearer pdf_live_dAXqLcX7U0Gn15oHuC37GyIhYfrPOnWJgZztuC1PJzJ'
                        }),
                        responseType: "stream"
                    })
                        .then(response => {
                            //console.log(response);
                                response.data.pipe(fs.createWriteStream(`D:/booking Pet Care ${data.petName}.pdf`))
                                res.status(200).json({
                                    booking: data
                                })

                        })
                        .catch(err => {
                            console.log(err);
                            next(err)
                        })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static editBookingData(req, res, next) {
        const id = req.params.id
        const input = {
            petName: req.body.petName,
            schedule: req.body.schedule,
            harga: req.body.harga,
            IdUser: req.id,
            IdCategory: req.body.IdCategory,
            imgUrl: req.body.imgUrl
        }
        Booking.update(input, { where: { id } })
            .then(data => {
                if (data[0] === 0) {
                    next({ status: 404, message: "Invalid data!" })
                } else {
                    res.status(201).json({
                        message: "Update Success"
                    })
                }
            })
            .catch(err => {
                console.log(err);
                if (err.name === 'SequelizeValidationError') {
                    res.status(400).json({
                        validation: err.message
                    })
                } else {
                    console.log(err);
                    next(err)
                }
            })
    }
    static deleteDataBooking(req, res, next) {
        const id = req.params.id
        Booking.destroy({ where: { id } })
            .then((data) => {
                if (data === 0) {
                    res.status(404).json({
                        message: `data with ${id} not found`
                    })
                } else {
                    res.status(200).json({
                        message: "success delete data"
                    })
                }
            })
            .catch((err) => {
                next(err)
            })
    }
    static payment(req, res, next) {
        const IdBooking = +req.params.IdBook
        Transaction.create({ IdBooking })
            .then(data => {
                res.status(201).json({
                    transaction: data
                })
            })
            .catch(err => {
                if (err.name === 'SequelizeValidationError') {
                    let validation = err.errors.map(el => el.message)
                    next({ status: 400, message: validation })
                } else {
                    next(err)
                }
            })
    }
}

module.exports = BookingController