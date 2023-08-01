import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { connectionDatabase } from "../../Database";

const database = connectionDatabase()

export const changeQntMin = (req: Request, res: Response) => {
    const query = 'UPDATE inventory SET QNT_MIN_ITEM = ? WHERE id_item = ?'
    const {id, numberToUpdateQntMin} = req.body;

    database.query(query, [numberToUpdateQntMin, id], (err) => {
        if(err) res.status(StatusCodes.BAD_GATEWAY).send(err)  
        res.status(StatusCodes.CREATED).send('Valor mínimo modificado') 
    })
}