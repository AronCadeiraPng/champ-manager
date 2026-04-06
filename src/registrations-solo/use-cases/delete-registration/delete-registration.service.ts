import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { RegistrationSoloFindService } from '../find-registration/find-registration.service';

@Injectable()
export class RegistrationSoloDeleteService {
    constructor(
        @InjectRepository(RegistrationSolo) private readonly registrationRepository: Repository<RegistrationSolo>,
        private readonly registrationFindService: RegistrationSoloFindService,
    ) {}

    async deleteRegistrationSolo(id: string) {
    const registration = await this.registrationFindService.findRegisterById(id);

    return this.registrationRepository.remove(registration);
  }
}
