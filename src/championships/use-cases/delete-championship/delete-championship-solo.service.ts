import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ChampionshipFindService } from '../find-championship/find-championship.service';
import { Championship } from '../../models/entity/championship.entity';

@Injectable()
export class ChampionshipDeleteService {
    constructor(
      @InjectRepository(Championship) private readonly championshipsRepository: Repository<Championship>,
      private readonly championshipFindService: ChampionshipFindService 
  ) {}

  async deleteChampionship(id: string) {
    const championship = await this.championshipFindService.findChampionshipById(id);

    return this.championshipsRepository.remove(championship);
  }
}
