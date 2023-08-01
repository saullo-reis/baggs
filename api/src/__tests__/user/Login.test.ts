import request from "supertest";
import { connectionDatabase } from "../../Database/index"
import { creatingTableCompaniesTeste } from "../database";
import { checkEmailExist, checkPasswordIsCorrect } from '../../Controllers/user/Login'
import { app } from "../../app";
import sha256 from "sha256";

const database = connectionDatabase()

describe('Login', () => {
    beforeAll(() => {
        database.connect()
        creatingTableCompaniesTeste()
    })

    afterAll(() => {
        database.query('DROP table companies')
        database.end()
    })

    const reqBodyRegister = {
        name: "Companya XPC",
        password: "123",
        email: "saullo@gmail.com"
    }

    const reqBodyLogin = {
        email: "saullo@gmail.com",
        password: "123"
    }

    async function registerToTeste(){
        await request(app).post("/register").send(reqBodyRegister)
    }

    test('check if email exist', async () => {
        await registerToTeste()
        const emailExist = await checkEmailExist(reqBodyRegister.email)

        expect(emailExist).toBe(true)
    })

    test('check if password is correct', async () => {
        const passwordIsCorrect = await checkPasswordIsCorrect(reqBodyRegister.email, sha256(reqBodyRegister.password))

        expect(passwordIsCorrect).toBe(true)
    })

    test('CHECK IF THE PASSWORD IS INCORRECT', async () => {
        const passwordIsCorrect = await checkPasswordIsCorrect(reqBodyRegister.email, '121321321321321321')

        expect(passwordIsCorrect).toBe(false)
    })
    
    test('should login', async () => {
        const response = await request(app).get('/login').send(reqBodyLogin)

        expect(response.status).toBe(202)
    })
})