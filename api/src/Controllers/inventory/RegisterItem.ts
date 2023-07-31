import { Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import { connectionDatabase } from "../../Database";
const database = connectionDatabase()

export const registerItem = (req: Request, res: Response) => {
    const { ID_COMPANY, NAME_ITEM, QNT_ITEM, QNT_MIN_ITEM } = req.body;
    const query = 'INSERT INTO inventory (ID_COMPANY, NAME_ITEM, QNT_ITEM, QNT_MIN_ITEM) VALUES(?,?,?,?);'

    database.query(query, [ID_COMPANY, NAME_ITEM, QNT_ITEM, QNT_MIN_ITEM], (err, results) => {
        if(err) res.status(StatusCodes.BAD_GATEWAY).send(err)
        res.status(StatusCodes.CREATED).send(results)
    })

}