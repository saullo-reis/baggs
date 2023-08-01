import { creatingTableInventoryTeste } from "../database"
import {connectionDatabase} from '../../Database'
import request from 'supertest'
import { app } from "../../app"
import { registerItemForTeste, reqBodyForAdd, reqBodyForRemove } from "./variablesTest"

const database = connectionDatabase()

describe('Change quantity', () => {
    beforeAll(() => {
        creatingTableInventoryTeste()
    })
    afterAll(() => {
        database.query('DROP TABLE inventory')
        database.end()
    })

    registerItemForTeste()

    test('Remove quantity', async () => {
        const response = await request(app).put('/changeQnt').send(reqBodyForRemove)

        expect(response.status).toBe(201)
    })

    test('Add quantity', async () => {
        const response = await request(app).put('/changeQnt').send(reqBodyForAdd)

        expect(response.status).toBe(201)
    })
})