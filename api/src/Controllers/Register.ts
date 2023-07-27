import {Request, Response} from "express"
import { database } from "../Database/Database"
import sha256 from 'sha256'
import { StatusCodes } from "http-status-codes";

export const register = async (req: Request, res: Response) => {
    const query = 'INSERT INTO companies (NAME_COMPANY, PASSWORD, EMAIL) VALUES (?, ?, ?)'
    const { name, password, email } = req.body;

    try{
        database.query(query, [name, sha256(password), email], (err) => {
            if (err){
                console.log(err)
                return res.status(StatusCodes.BAD_GATEWAY).send(err.message);
            } 
            return res.status(StatusCodes.ACCEPTED).send('Registrado');
        });
    }catch(err){
        console.error(err)
    }
};