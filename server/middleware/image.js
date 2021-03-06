const {Booking, User, Category} = require('../models')
const FormData = require("form-data")
const axios = require("axios")

async function uploadImage(req, res, next) {
    //console.log(req.file, "ini req file");
    if (!req.file) {
        const id = req.params.id 
        Booking.findByPk(id)
        .then((data) => {
            req.body.imgUrl = data.imgUrl
            next()
        })
        .catch((err) => {
            next(err) 
        })
    } else {
        if (req.file.size > 5255000) {
            next({ message: "File terlalu besar" }) //ini belum ke handle untuk tampil error, tapi data udh gak masuk
        } else {
            const form = new FormData()
            form.append('file', req.file.buffer.toString("base64"))
            form.append('fileName', req.file.originalname)

            const privateKey = new Buffer.from('private_7+pY6tFovBJ2OFmC32D0AJqwFZg=' + ":").toString('base64')
            const uploader = await axios({
                method: "POST",
                url: 'https://upload.imagekit.io/api/v1/files/upload',
                data: form,
                headers: {
                    ...form.getHeaders(),
                    Authorization: `Basic ${privateKey}`
                }
            })
            req.body.imgUrl = uploader.data.url
            next()
        }
    }
}

module.exports = uploadImage