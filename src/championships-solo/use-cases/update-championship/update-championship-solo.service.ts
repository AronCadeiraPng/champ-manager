import { Injectable } from "@nestjs/common";
import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { Repository } from "typeorm";
import { UpdateChampionshipSoloDto } from "src/championships-solo/models/dtos/update-championship-solo.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ChampionshipSoloFindService } from "../find-championship/find-championship-solo.service";

@Injectable()
export class ChampionshipSoloUpdateService {
    constructor(
      @InjectRepository(ChampionshipSolo) private readonly championshipSoloRepository: Repository<ChampionshipSolo>,
      private readonly championshipSoloFindService: ChampionshipSoloFindService
  ) {}

  async updateChampionship(id: string, updateChampionshipSoloDto: UpdateChampionshipSoloDto) {
    const championship = await this.championshipSoloFindService.findChampionshipSoloById(id);
    Object.assign(championship, updateChampionshipSoloDto);

    return this.championshipSoloRepository.save(championship);
  }
}