import { Connection } from 'mysql';
import request  from 'supertest'
import {app} from '../../app'
import {connectionDatabase} from '../../Database/index'
import { creatingTableCompaniesTeste, creatingTableInventoryTeste } from '../database';

describe('register', () => {
    let database: Connection

    beforeAll(() => {
        database = connectionDatabase()

        creatingTableCompaniesTeste()
        creatingTableInventoryTeste()
    })
    
    afterAll(() => {
        database.query('DROP TABLE companies')
        database.end()
    })

    

    test('should register a company',async () => {
        const reqBody = {
            name: "Companya XPC",
            password: "123",
            email: "saullo@gmail.com"
        }

        const response = await request(app).post('/register').send(reqBody)

        expect(response.status).toBe(202)
    });

    test("shouldnt register with the same email", async () => {
        const reqBody = {
            name: "Companya XPCX",
            password: "123",
            email: "saullo@gmail.com"
        }

        const response = await request(app).post('/register').send(reqBody)

        expect(response.status).toBe(502)
    })

    test("shouldnt register with the same name", async () => {
        const reqBody = {
            name: "Companya XPC",
            password: "123",
            email: "saulloreis@gmail.com"
        }

        const response = await request(app).post('/register').send(reqBody)

        expect(response.status).toBe(502)
    })
});
