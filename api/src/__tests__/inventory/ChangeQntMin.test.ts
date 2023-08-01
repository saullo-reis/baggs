import { app } from "../../app";
import request from "supertest";
import { connectionDatabase } from "../../Database";
import { creatingTableInventoryTeste } from "../database";
import { registerItemForTeste, reqBodyChangeQntMin } from "./variablesTest";

const database = connectionDatabase()

describe('Change qunatity min', () => {
    beforeAll(() => {
        creatingTableInventoryTeste()
    })
    afterAll(() => {
        database.query('DROP TABLE inventory')
        database.end()
    })

    registerItemForTeste()

    test('Change quantity', async () => {
        const response = await request(app).put('/changeQntMin').send(reqBodyChangeQntMin)

        expect(response.status).toBe(201)
    })
})