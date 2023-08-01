import { connectionDatabase } from '../../Database/index'
import { creatingTableInventoryTeste } from '../database'
import { app } from '../../app'
import request from 'supertest'
import { reqBodyRegisterItem } from './variablesTest'

const database = connectionDatabase()

describe('Register item', () => {
    beforeAll(() => {
        creatingTableInventoryTeste()
    })
    afterAll(() => {
        database.query('DROP table inventory')
        database.end()
    })

    test('should register the item', async () => {
        const response = await request(app).post('/registerItem').send(reqBodyRegisterItem)

        expect(response.status).toBe(201)
    })

})