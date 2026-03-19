import { Injectable } from '@nestjs/common';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Championship } from './entities/championship.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChampionshipsService {
    constructor(@InjectRepository(Championship) private readonly championshipsRepository: Repository<Championship>) {}

  async createChampionship(createChampionshipDto: CreateChampionshipDto) {
    const championship = this.championshipsRepository.create(createChampionshipDto)
    this.championshipsRepository.save(championship)
    
  }

}
