const express = require('express')
const app = express()

const port = process.argv.length > 2 ? process.argv[2] : 3000
const uuid = require('uuid')
app.use(express.json())
let users = {}
let items = []

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
app.use(express.static('public'))
var apiRouter = express.Router()
app.use(`/api`, apiRouter)
