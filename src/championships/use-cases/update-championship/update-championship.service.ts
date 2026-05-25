import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateChampionshipDto } from '../../models/dtos/update-championship.dto';
import { Championship } from '../../models/entity/championship.entity';
import { ChampionshipFindService } from '../find-championship/find-championship.service';


@Injectable()
export class ChampionshipUpdateService {
    constructor(
      @InjectRepository(Championship) private readonly championshipSoloRepository: Repository<Championship>,
      private readonly championshipFindService: ChampionshipFindService
  ) {}

  async updateChampionship(id: string, updateChampionshipSoloDto: UpdateChampionshipDto) {
    const championship = await this.championshipFindService.findChampionshipById(id);

    const convertDate: Date = new Date(updateChampionshipSoloDto.registrationEnd);

    const newUpdateDto = {
      registrationEnd: convertDate
    }

    Object.assign(championship, newUpdateDto);

    return this.championshipSoloRepository.save(championship);
  }
}