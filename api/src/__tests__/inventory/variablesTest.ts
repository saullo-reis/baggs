import request from 'supertest'
import {app} from '../../app'

export const reqBodyRegisterItem = {
    ID_COMPANY: 1,
    NAME_ITEM: "Arroz",
    QNT_ITEM: 3,
    QNT_MIN_ITEM: 3
}

export async function registerItemForTeste() {
    await request(app).post('/registerItem').send(reqBodyRegisterItem)
}

export const reqBodyForRemove = {
    id: 1,
    action: "REMOVE"
}

export const reqBodyForAdd = {
    id: 1,
    action: "ADD"
}

export const reqBodyChangeQntMin = {
    id: 2,
    numberToUpdateQntMin: 80
}