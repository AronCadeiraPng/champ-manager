import { Repository } from 'typeorm';
import { UserFindService } from 'src/users/use-cases/find-user/find-user.service';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { CreateRegistrationSoloDto } from 'src/registrations-solo/models/dtos/create-registration.dto';
import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';
export declare class RegistrationSoloCreateService {
    private readonly registrationSoloRepository;
    private readonly userFindService;
    private readonly championshipFindService;
    constructor(registrationSoloRepository: Repository<RegistrationSolo>, userFindService: UserFindService, championshipFindService: ChampionshipFindService);
    register(createRegistrationDto: CreateRegistrationSoloDto): Promise<RegistrationSolo>;
}
