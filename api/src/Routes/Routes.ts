import { Router } from 'express'
import { register } from '../Middlewares/Register'

const router = Router()

router.get('/', (__, res) => {
    res.send('Teste')
})

router.post('/register', register)

export {router}