const BookingController = require ('../controller/BookingController')
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const uploadImage = require('../middleware/image.js')
const router = require('express').Router()

router.get('/', BookingController.getDataBooking)
router.post('/:CategoryId', upload.single('imgUrl'), uploadImage, BookingController.addBookingData)
router.get('/:id', BookingController.getOneBooking)
router.get('/:id/pdf-convert', BookingController.convertDataToPDF)
router.put('/:id', upload.single('imgUrl'), uploadImage, BookingController.editBookingData)
router.delete('/:id', BookingController.deleteDataBooking)

module.exports = router