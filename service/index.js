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


apiRouter.post(`/auth/create`, async (req, res) => {
    const user = users[req.body.email]
    if (user) {
        res.status(409).send({ msg: 'Existing user'})
    } else {
        const user = { email: req.body.email, password: req.body.password, token: uuid.v4() }
        users[user.email] = user
        res.send({ token: user.token })
    }
})

apiRouter.post('auth/login', async (req, res) => {
    const user = users[req.body.email]
    if(user) {
        if (req.bosy.password === user.password) {
            user.token = uuid.v4()
            res.send({ token: user.token })
        }
    }
    res.status(401).send({ msg: 'Unauthorized'})
})

apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users.find((u) => u.token === req.body.token))
    if (user) {
        delete user.token
    }
    res.status(204).end()
})

apiRouter.get('/items', (_req, res) => {
    res.send(items)
})

apiRouter.post('/items', (req, res) => {
    items.push(req.body)
    res.send(items)
})