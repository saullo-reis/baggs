import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { connectionDatabase } from "../../Database";

const database = connectionDatabase()
export const deleteItem = (req: Request, res: Response) => {
    const query = "DELETE FROM inventory WHERE id_item = ?"
    const id = req.body.id

    database.query(query, id, (err) => {
        if(err) res.status(StatusCodes.BAD_GATEWAY).send(err)

        res.status(StatusCodes.ACCEPTED).send({
            sucess: `Item do id ${id} foi deletado`
        })
    })
}