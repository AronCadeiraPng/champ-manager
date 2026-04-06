import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { NotFoundException } from "src/common/exceptions";
import { Repository } from "typeorm";

@Injectable()
export class ChampionshipSoloFindService {
    constructor(
        @InjectRepository(ChampionshipSolo) private readonly championshipSoloRepository: Repository<ChampionshipSolo>,
    ) {}

    async findAllChampionshipsSolo(): Promise<ChampionshipSolo[]> {
    return await this.championshipSoloRepository.find()
  }

  async findChampionshipSoloByName(name: string) {
    return await this.championshipSoloRepository.findOneBy({name});
  }

  async findChampionshipSoloById(id: string) {
    const championship = await this.championshipSoloRepository.findOneBy({id});
    if(!championship) throw new NotFoundException('Torneio', id);

    return championship;
  }
}