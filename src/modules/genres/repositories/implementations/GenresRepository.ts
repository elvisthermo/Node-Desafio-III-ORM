import { getRepository, Repository } from "typeorm";
import { IOrdersRepository } from "../../../orders/repositories/IOrdersRepository";
import { Genre } from "../../entities/Genders";
import { IGenesRepository } from "./IGenesRepository";

export class GenresRepository implements IGenesRepository {
    private repository : Repository<Genre>

    constructor(){
        this.repository = getRepository(Genre);
    }

    async findAllGenres(): Promise<Genre[]> {
        return await this.repository.createQueryBuilder().getMany();
    }

}