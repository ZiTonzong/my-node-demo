const express = require('express')
const dotenv = require('dotenv')

dotenv.config({
	path: './config/config.env',
})

const app = express()

const PORT = process.env.PORT || 3000

app.listen(
	PORT,
	console.log(`Server rnning in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
