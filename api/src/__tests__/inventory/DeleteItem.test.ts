import e from 'express'
import request  from 'supertest'
import { app } from '../../app'
import { connectionDatabase } from '../../Database'
import { creatingTableInventoryTeste } from '../database'
import {reqBodyRegisterItem} from './variablesTest'

const database = connectionDatabase()

describe('Delete Item', () => {
    beforeAll(() => {
        creatingTableInventoryTeste()
    })
    afterAll(() => {
        database.query('DROP TABLE inventory;')
        database.end()
    })

    test('should delete item', async () => {
        await request(app).post('/registerItem').send(reqBodyRegisterItem)
        const response = await request(app).delete('/deleteItem').send({ id: reqBodyRegisterItem.ID_COMPANY})

        expect(response.status).toBe(202)
    })
})