import { getRepository, Repository } from "typeorm";
import { Order } from "../../entities/Order";
import { IOrdersRepository } from "../IOrdersRepository";


export class OrderRepository implements IOrdersRepository {
    private repository : Repository<Order>
    constructor(){
        this.repository = getRepository(Order)
    }
    findByOrderGameId(id: string): Promise<void> {
        return this.repository.query('SELECT * FROM orders AS u');
    }

}