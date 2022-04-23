//require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {login, register} = require('./controller.js')
//Server port
app.use(express.json())
app.use(cors())



//app.post('/getDepartment', getDepartment)
app.post('/login', login)
app.post('/register', register)

app.listen(5050, () => console.log(`up on 5050`))