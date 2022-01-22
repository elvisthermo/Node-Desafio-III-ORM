import { Genre } from "../../entities/Genders";

export interface IGenesRepository {
    findAllGenres() : Promise<Genre[]>
}