import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sport } from '../../models/entity/sport.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SportDeleteService {
    constructor(
        @InjectRepository(Sport) private readonly sportRepository: Repository<Sport>,
    ) {}

    async delete(id: string) {
      await this.sportRepository.update(id, { deleted: true });
      return this.sportRepository.findOneBy({ id });
    }
}
