import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Sport } from "src/sports/models/entity/sport.entity";
import { Repository } from "typeorm";
import { SportFindService } from "../find-sport/find-sport.service";
import { UpdateSportDto } from "src/sports/models/dtos/update-sport.dto";

@Injectable()
export class SportUpdateService {
    constructor(
        @InjectRepository(Sport) private readonly sportRepository: Repository<Sport>,
        private readonly sportFindService: SportFindService
    ) {}

    async update(id: string, updateSportDto: UpdateSportDto) {
        const sport = await this.sportFindService.findSportById(id);

        Object.assign(sport, updateSportDto);

        return this.sportRepository.save(sport);
    }
}