const express = require('express')
const router = express.Router()
const bookingRouter = require('./bookingRoutes')
const {authentication} = require ('../middleware/auth')
const UserController = require('../controller/UserController')
const CategoryController = require ('../controller/CategoryController')
const BookingController = require('../controller/BookingController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/google-login', UserController)

router.use(authentication)
router.get('/categories', CategoryController.getCategory)
router.get('/categories/:id', CategoryController.getOneCategory)
router.use('/bookings', bookingRouter)
router.post('/payment/:idBook', BookingController.payment)

module.exports = router