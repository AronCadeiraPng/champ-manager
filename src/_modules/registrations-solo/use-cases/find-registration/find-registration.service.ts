import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrationSolo } from '../../models/entity/registration.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrationSoloFindService {
  constructor(
    @InjectRepository(RegistrationSolo)
    private readonly registrationsRepository: Repository<RegistrationSolo>,
  ) {}

  async allRegisters(): Promise<RegistrationSolo[]> {
    return await this.registrationsRepository.find({});
  }

  async findRegistrationsByChampionship(championshipId: string) {
    return this.registrationsRepository.find({
      where: {
        championshipId: championshipId,
      },
    });
  }

  async findRegisterById(id: string) {
    const registration = await this.registrationsRepository.findOneBy({ id });
    if (!registration) throw new NotFoundException('Registro', id);

    return registration;
  }
}
