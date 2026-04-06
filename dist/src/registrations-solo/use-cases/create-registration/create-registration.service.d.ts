import { Repository } from 'typeorm';
import { UserFindService } from 'src/users/use-cases/find-user/find-user.service';
import { ChampionshipSoloFindService } from 'src/championships-solo/use-cases/find-championship/find-championship-solo.service';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { CreateRegistrationSoloDto } from 'src/registrations-solo/models/dtos/create-registration.dto';
export declare class RegistrationSoloCreateService {
    private readonly registrationSoloRepository;
    private readonly userFindService;
    private readonly championshipFindService;
    constructor(registrationSoloRepository: Repository<RegistrationSolo>, userFindService: UserFindService, championshipFindService: ChampionshipSoloFindService);
    register(createRegistrationDto: CreateRegistrationSoloDto): Promise<RegistrationSolo>;
}
