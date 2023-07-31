import { creatingTableCompanies, creatingTableInventory, database } from "./Database";
import {databaseTeste} from "../__tests__/database/index"

function connectionDatabase(){
    if(process.env.NODE_ENV === 'test'){
        return databaseTeste
    }
    creatingTableCompanies()
    creatingTableInventory()
    return database
}

export { connectionDatabase }