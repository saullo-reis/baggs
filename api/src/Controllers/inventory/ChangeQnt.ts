import { Request, Response } from "express";
import { RESET_CONTENT, StatusCodes } from "http-status-codes";
import { connectionDatabase } from "../../Database";

const database = connectionDatabase()

const getQntInDatabase = async (id: number): Promise<number> => {
    const query = 'SELECT QNT_ITEM FROM inventory WHERE id_item = ?'

    return new Promise((resolve, reject) => {
        database.query(query, id, (err, results) => {
            if (err) reject(console.error(err))
            console.log(results)
            resolve(results[0].QNT_ITEM)
        })
    })
}

export const changeQnt =  async (req: Request, res: Response) => {
    const {id, action} = req.body
    const query = "UPDATE inventory SET QNT_ITEM = ? WHERE id_item = ?"
    let qntOfItens = await getQntInDatabase(id)

    if(action === 'REMOVE'){
        --qntOfItens
    }else{
        ++qntOfItens
    }
    
    database.query(query,[qntOfItens, id], (err) => {
        if(err) res.status(StatusCodes.BAD_GATEWAY).send(err)
        res.status(StatusCodes.CREATED).send('Quantidade modificada')
    })

}
