import {Request, Response} from "express"
import { database } from "../Database/Database"
import sha256 from 'sha256'

export const register = async (req: Request, res: Response) => {
    const query = 'INSERT INTO enterprises (NAME_ENTERPRISE, PASSWORD, EMAIL) VALUES (?, ?, ?)'
    const { name, password, email } = req.body;

    try{
        database.query(query, [name, sha256(password), email], (err) => {
            if (err){
                console.log(err)
                return res.send(err.message);
            } 
            return res.send('Registrado');
        });
    }catch(err){
        console.error(err)
    }
};