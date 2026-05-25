import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Championship } from '../../models/entity/championship.entity';
import { NotFoundException } from '../../../_common/exceptions';

@Injectable()
export class ChampionshipFindService {
    constructor(
        @InjectRepository(Championship) private readonly championshipRepository: Repository<Championship>,
    ) {}

    async findAllChampionships(): Promise<Championship[]> {
    return await this.championshipRepository.find()
  }

  async findChampionshipByName(name: string) {
    return await this.championshipRepository.findOneBy({name});
  }

  async findChampionshipById(id: string) {
    const championship = await this.championshipRepository.findOneBy({id});
    if(!championship) throw new NotFoundException('Torneio', id);

    return championship;
  }
}