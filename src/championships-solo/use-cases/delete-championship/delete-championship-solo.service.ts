import { Injectable } from "@nestjs/common";
import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ChampionshipSoloFindService } from "../find-championship/find-championship-solo.service";

@Injectable()
export class ChampionshipSoloDeleteService {
    constructor(
      @InjectRepository(ChampionshipSolo) private readonly championshipsRepository: Repository<ChampionshipSolo>,
      private readonly championshipSoloFindService: ChampionshipSoloFindService
  ) {}

  async deleteChampionship(id: string) {
    const championship = await this.championshipSoloFindService.findChampionshipSoloById(id);

    return this.championshipsRepository.remove(championship);
  }
}