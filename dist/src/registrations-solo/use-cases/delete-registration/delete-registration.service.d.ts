import { Repository } from 'typeorm';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { RegistrationSoloFindService } from '../find-registration/find-registration.service';
export declare class RegistrationSoloDeleteService {
    private readonly registrationRepository;
    private readonly registrationFindService;
    constructor(registrationRepository: Repository<RegistrationSolo>, registrationFindService: RegistrationSoloFindService);
    deleteRegistrationSolo(id: string): Promise<RegistrationSolo>;
}
