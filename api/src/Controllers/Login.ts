import { Request, Response } from "express";
import sha256 from "sha256";
import { connectionDatabase } from "../Database/index";
import { StatusCodes } from 'http-status-codes'

const connection = connectionDatabase()

function checkEmailExist(email: string): Promise<boolean> {
    const query = 'SELECT EMAIL FROM companies WHERE EMAIL = ?'

    return new Promise((resolve, reject) => {
        connection.query(query, email, (err, results) => {
            if (err) {
                console.error(err)
                reject(err)
            }

            resolve(results.length === 1)
        })
    })
}

function checkPasswordIsCorrect(email: string, password: string): Promise<boolean> {
    const query = 'SELECT PASSWORD FROM companies WHERE email = ?'

    return new Promise((resolve, reject) => {
        connection.query(query, email, (err, results) => {
            if (err) {
                console.error(err)
                reject(err)
            }

            resolve(password === results[0].password)
        })
    })

}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const emailExist = await checkEmailExist(email)
    const passwordIsCorrect = await checkPasswordIsCorrect(email, sha256(password))

    if (!emailExist) return res.status(StatusCodes.BAD_REQUEST).send({
        message: {
            error: 'Email não registrado.'
        }
    })

    if (!passwordIsCorrect) return res.status(StatusCodes.BAD_REQUEST).send({
        message: {
            error: 'Senha incorreta.'
        }
    })
    
    return res.status(StatusCodes.ACCEPTED).send({
        sucess: '92hj4891hj9r1h237u98r129hr7912h98211'
    })
}