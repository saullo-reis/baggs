import { Request, Response } from 'express'; 
import { register } from '../../Controllers/Register'; 
import request  from 'supertest'
import {app} from '../../app'
import {database} from '../../Database/Database'

describe('register', () => {
    beforeAll(() => {
        database.connect()
    })
    afterAll(() => {
        database.end()
    })

    test('should register a company',async () => {
        const reqBody = {
            name: "Company XPC",
            password: "123",
            email: "saullo@gmail.com"
        }

        const response = await request(app).post('/register').send(reqBody)

        expect(response.status).toBe(202)
        expect(response.body).toHaveProperty('id')
    });
});
