import { RegistrationTeam } from "src/registrations-team/models/entity/registration-team.entity";
import { Repository } from "typeorm";
import { RegistrationTeamFindService } from "../find-registration/find-registration.service";
export declare class RegistrationTeamDeleteService {
    private readonly registrationRepository;
    private readonly registrationFindService;
    constructor(registrationRepository: Repository<RegistrationTeam>, registrationFindService: RegistrationTeamFindService);
    execute(registrationId: string): Promise<RegistrationTeam>;
}
