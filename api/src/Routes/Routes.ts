import { Router } from 'express'
import { login } from '../Controllers/Login'
import { register } from '../Controllers/Register'

const router = Router()

router.get('/', (__, res) => {
    res.send('Teste')
})

router.post('/register', register)
router.get('/login', login)

export {router}