import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BadRequestException } from "src/common/exceptions/bad-request.exception";
import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { CreateChampionshipSoloDto } from "src/championships-solo/models/dtos/create-championship-solo.dto";
import { ChampionshipSoloFindService } from "../find-championship/find-championship-solo.service";

@Injectable()
export class ChampionshipSoloCreateService {
    constructor(
      @InjectRepository(ChampionshipSolo) private readonly championshipSoloRepository: Repository<ChampionshipSolo>,
      private readonly championshipFindService: ChampionshipSoloFindService
  ) {}

  async createChampionship(createChampionshipDto: CreateChampionshipSoloDto) {
    const championshipExists = await this.championshipFindService.findChampionshipSoloByName(createChampionshipDto.name);

    if(championshipExists) throw new BadRequestException('Torneio com este nome já existe', 400)

    const championship = this.championshipSoloRepository.create(createChampionshipDto);
    return this.championshipSoloRepository.save(championship);
  }
}