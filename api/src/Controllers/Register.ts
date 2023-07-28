import {Request, Response} from "express"
import { connectionDatabase } from "../Database/index"
import sha256 from 'sha256'
import { StatusCodes } from "http-status-codes";

const database = connectionDatabase()

export const register = async (req: Request, res: Response) => {
    const query = 'INSERT INTO companies (NAME_COMPANY, PASSWORD, EMAIL) VALUES (?, ?, ?)'
    const { name, password, email } = req.body;

    try{
        database.query(query, [name, sha256(password), email], (err) => {
            if (err){
                return res.status(StatusCodes.BAD_GATEWAY).send(err.message);
            } 
            return res.status(StatusCodes.ACCEPTED).send('Registrado');
        });
    }catch(err){
        console.error(err)
    }
};