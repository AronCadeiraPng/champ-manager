import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '../../../_common/exceptions';
import { BadRequestException } from '../../../_common/exceptions/bad-request.exception';
import { RegistrationTeam } from '../../models/entity/registration-team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrationTeamFindService {
  constructor(
    @InjectRepository(RegistrationTeam)
    private readonly registrationsRepository: Repository<RegistrationTeam>,
  ) {}

  async allRegisters(): Promise<RegistrationTeam[]> {
    const registers = await this.registrationsRepository.find({});

    if (registers.length < 1)
      throw new BadRequestException('Nenhum registro encontrado!', 200);

    return registers;
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
