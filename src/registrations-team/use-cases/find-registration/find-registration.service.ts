import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from 'src/common/exceptions';
import { RegistrationTeam } from 'src/registrations-team/models/entity/registration-team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrationTeamFindService {
   constructor(
    @InjectRepository(RegistrationTeam) private readonly registrationsRepository: Repository<RegistrationTeam>,
  ) {}

    async allRegisters(): Promise<RegistrationTeam[]> {
      return await this.registrationsRepository.find({
      })
    }

    async findRegistrationsByChampionship(championshipId: string) {
      return this.registrationsRepository.find({where: {
        championshipId: championshipId
      }})
    }

    async findRegisterById(id: string) {
      const registration = await this.registrationsRepository.findOneBy({id});
      if(!registration) throw new NotFoundException('Registro',id);

      return registration;
    }
}
