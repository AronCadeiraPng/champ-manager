import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserFindService } from 'src/users/use-cases/find-user/find-user.service';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';
export declare class RegistrationSoloCreateService {
    private readonly registrationSoloRepository;
    private readonly userFindService;
    private readonly championshipFindService;
    logger: Logger;
    constructor(registrationSoloRepository: Repository<RegistrationSolo>, userFindService: UserFindService, championshipFindService: ChampionshipFindService);
    register(championshipId: string, userId: string): Promise<RegistrationSolo>;
}
