const express = require('express')
const expressValidator = require('express-validator')
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()

// routes
const formRoutes = require('./routes/form')

// app
const app = express()

//middlewares
app.use(expressValidator())
app.use(cors())
app.use(bodyParser.json())

// routes middlewares
app.use("/api", formRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

