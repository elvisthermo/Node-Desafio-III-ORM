import {Order} from "../entities/Order"

export interface IOrdersRepository{
    findByOrderGameId(id: string): Promise<void>
}