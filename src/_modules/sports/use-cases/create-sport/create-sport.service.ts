import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSportDto } from '../../models/dtos/create-sport.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sport } from '../../models/entity/sport.entity';
import { Repository } from 'typeorm';
import { SportFindService } from '../find-sport/find-sport.service';

@Injectable()
export class SportCreateService {
  constructor(
    @InjectRepository(Sport)
    private readonly sportRepository: Repository<Sport>,
    private readonly sportFindService: SportFindService,
  ) {}

  async create(createSportDto: CreateSportDto): Promise<Sport> {
    const sportExists = await this.sportFindService.findSportByName(
      createSportDto.name,
    );

    if (sportExists)
      throw new BadRequestException('Esporte com este nome já existe!');

    const sport = this.sportRepository.create(createSportDto);
    return this.sportRepository.save(sport);
  }
}
