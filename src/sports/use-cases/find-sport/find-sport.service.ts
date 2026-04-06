import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NotFoundException } from "src/common/exceptions";
import { BadRequestException } from "src/common/exceptions/bad-request.exception";
import { Sport } from "src/sports/models/entity/sport.entity";
import { Repository } from "typeorm";

@Injectable()
export class SportFindService {
    constructor(
        @InjectRepository(Sport) private readonly sportRepository: Repository<Sport>
    ) {}

    async findSportByName(name: string) {
        const sport = await this.sportRepository.findOne({
            where: {
                name: name
            }
        })

        return sport;
    }


    async findSportById(id: string): Promise<Sport> {
        const sport = await this.sportRepository.findOne({
            where: {
                id: id
            }
        })

        if(!sport) throw new BadRequestException('Espoirte', 400);

        return sport;
    }

    async findAllSport(): Promise<Sport[]> {
        const sports = await this.sportRepository.find({})
        
        if(!sports) throw new NotFoundException('Nenhum torneio encontrado!');
        
        return sports;
        }
}