import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repository/user.repository";
import { Championship } from "../../../championships/models/entity/championship.entity";

@Injectable()
export class GetUserChampionshipService {
    constructor(
        private readonly repository: UserRepository
    ) { }

    // async execute(id: string): Promise<Championship> {
    //     return await this.repository.
    // }
}