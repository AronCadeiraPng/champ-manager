import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RegistrationTeam } from "src/registrations-team/models/entity/registration-team.entity";
import { Repository } from "typeorm";
import { RegistrationTeamFindService } from "../find-registration/find-registration.service";

@Injectable()
export class RegistrationTeamDeleteService {
    constructor(
        @InjectRepository(RegistrationTeam) private readonly registrationRepository: Repository<RegistrationTeam>,
        private readonly registrationFindService: RegistrationTeamFindService
    ) {}
    
    async execute(registrationId: string): Promise<RegistrationTeam> {
        const registration = await this.registrationFindService.findRegisterById(registrationId);

        return this.registrationRepository.remove(registration);
    }
}