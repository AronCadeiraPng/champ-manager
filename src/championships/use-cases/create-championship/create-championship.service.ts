import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BadRequestException } from "src/common/exceptions/bad-request.exception";
import { SportFindService } from "src/sports/use-cases/find-sport/find-sport.service";
import { Championship } from "src/championships/models/entity/championship.entity";
import { CreateChampionshipDto } from "src/championships/models/dtos/create-championship.dto";
import { ChampionshipFindService } from "../find-championship/find-championship.service";

@Injectable()
export class ChampionshipCreateService {
    constructor(
      @InjectRepository(Championship) private readonly championshipRepository: Repository<Championship>,
      private readonly championshipFindService: ChampionshipFindService,
      private readonly sportFindService: SportFindService
  ) {}

  async createChampionship(createChampionshipDto: CreateChampionshipDto) {
    const championshipExists = await this.championshipFindService.findChampionshipByName(createChampionshipDto.name);
    await this.sportFindService.findSportById(createChampionshipDto.sportId)

    if(championshipExists) throw new BadRequestException('Torneio com este nome já existe', 400)

    const championship = this.championshipRepository.create(createChampionshipDto);
    return this.championshipRepository.save(championship);
  }
}