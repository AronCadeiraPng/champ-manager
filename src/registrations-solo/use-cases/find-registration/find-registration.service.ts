import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from 'src/common/exceptions';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrationSoloFindService {
   constructor(
    @InjectRepository(RegistrationSolo) private readonly registrationsRepository: Repository<RegistrationSolo>,
  ) {}

    async allRegisters(): Promise<RegistrationSolo[]> {
      return await this.registrationsRepository.find({
      })
    }

    async findRegisterById(id: string) {
      const registration = await this.registrationsRepository.findOneBy({id});
      if(!registration) throw new NotFoundException('Registro',id);

      return registration;
    }
}
