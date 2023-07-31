import { Router } from 'express'
import { login } from '../Controllers/user/Login'
import { register } from '../Controllers/user/Register'
import { registerItem } from '../Controllers/inventory/RegisterItem'
import { deleteItem } from '../Controllers/inventory/DeleteItem'
import { changeQnt } from '../Controllers/inventory/ChangeQnt'

const router = Router()

router.get('/', (__, res) => {
    res.send('Teste')
})

router.post('/register', register)
router.get('/login', login)
router.post('/registerItem', registerItem)
router.delete('/deleteItem', deleteItem)
router.put('/changeQnt', changeQnt)

export {router}