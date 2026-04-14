import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Championship } from "src/championships/models/entity/championship.entity";
import { ChampionshipFindService } from "../find-championship/find-championship.service";
import { UpdateChampionshipDto } from "src/championships/models/dtos/update-championship.dto";

@Injectable()
export class ChampionshipUpdateService {
    constructor(
      @InjectRepository(Championship) private readonly championshipSoloRepository: Repository<Championship>,
      private readonly championshipFindService: ChampionshipFindService
  ) {}

  async updateChampionship(id: string, updateChampionshipSoloDto: UpdateChampionshipDto) {
    const championship = await this.championshipFindService.findChampionshipById(id);
    Object.assign(championship, updateChampionshipSoloDto);

    return this.championshipSoloRepository.save(championship);
  }
}