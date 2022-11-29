import * as dao from './users-dao.js'

let currentUser = null

const UsersController = (app) => {
    const createUser = async (req, res) => {
        const user = req.body
        const actualUser = await dao.createUser(user)
        res.json(actualUser)
    }
    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers()
        res.json(users)
    }
    const deleteUser = async (req, res) => {
        const uid = req.params.uid
        const status = await dao.deleteUser(uid)
        res.json(status)
    }
    const updateUser = async (req, res) => {
        const uid = req.params.uid
        const updates = req.body
        const status = await dao.updateUser(uid,  updates)
        res.json(status)
    }

    const register = async (req, res) => {
        const user = req.body;
        if (!user.username) {
            res.sendStatus(403)
            return
        }
        const existingUser = await dao.findUserByUsername(user.username)
        if(existingUser) {
            res.sendStatus(403)
            return
        }
        const newUser = await dao.createUser(user)
        req.session['currentUser'] = newUser
        res.json(newUser)
    }

    const login = async (req, res) => {
        const credentials = req.body
        const existingUser = await dao.findUserByCredentials(credentials.username, credentials.password)
        if(existingUser) {
            currentUser = existingUser
            res.json(existingUser)
        }
        else {
            res.sendStatus(403)
        }
    }

    const profile = (req, res) => {
        if (req.session['currentUser']) {
            res.send(req.session['currentUser'])
        } else {
            res.sendStatus(403)
        }
    }

    const logout = (req, res) => {
        currentUser = null
        res.sendStatus(200)
    }

    app.post('/users', createUser)
    app.get('/users', findAllUsers)
    app.delete('/users/:uid', deleteUser)
    app.put('/users/:uid', updateUser)

    app.post('/register', register)
    app.post('/login', login)
    app.post('/profile', profile)
    app.post('/logout', logout)
}

export default UsersController