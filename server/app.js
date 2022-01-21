if (process.env.NODE_ENV != "production") require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const router = require('./router/router.js')
const errHandler = require ('./middleware/errHandler')
const cors = require ("cors")


//body parser
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req,res)=>{
    res.json('start')
})
app.use('/', router)

app.use(errHandler)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app