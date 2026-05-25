import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChampionshipFindService } from '../find-championship/find-championship.service';
import { Repository } from 'typeorm';
import { SportFindService } from '../../../sports/use-cases/find-sport/find-sport.service';
import { CreateChampionshipDto } from '../../models/dtos/create-championship.dto';
import { Championship } from '../../models/entity/championship.entity';

@Injectable()
export class ChampionshipCreateService {
  constructor(
    @InjectRepository(Championship) private readonly championshipRepository: Repository<Championship>,
    private readonly championshipFindService: ChampionshipFindService,
    private readonly sportFindService: SportFindService
  ) { }

  async createChampionship(createChampionshipDto: CreateChampionshipDto) {
    const championshipExists = await this.championshipFindService.findChampionshipByName(createChampionshipDto.name);
    await this.sportFindService.findSportById(createChampionshipDto.sportId);

    if (championshipExists) throw new BadRequestException('Torneio com este nome já existe');

      const today = new Date();

      const registrationEnd: Date = new Date(createChampionshipDto.registrationEnd);
      const registrationStart: Date = new Date(createChampionshipDto.registrationStart);
      
      if((registrationStart || registrationEnd) < today) throw new BadRequestException('Data inválida!');

      const newCreateChampionshipDto = {
        ...createChampionshipDto,
        registrationStart: registrationStart,
        registrationEnd: registrationEnd
      }

    const championship = this.championshipRepository.create(newCreateChampionshipDto);
    return this.championshipRepository.save(championship);
  }
}