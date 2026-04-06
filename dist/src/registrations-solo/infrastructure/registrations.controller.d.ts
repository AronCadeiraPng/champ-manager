import { CreateRegistrationSoloDto } from '../models/dtos/create-registration.dto';
import { RegistrationSoloFindService } from '../use-cases/find-registration/find-registration.service';
import { RegistrationSoloCreateService } from '../use-cases/create-registration/create-registration.service';
import { RegistrationSoloDeleteService } from '../use-cases/delete-registration/delete-registration.service';
import { RegistrationSolo } from '../models/entity/registration.entity';
export declare class RegistrationsSoloController {
    private readonly registrationFindService;
    private readonly registrationCreateService;
    private readonly registrationDeleteService;
    constructor(registrationFindService: RegistrationSoloFindService, registrationCreateService: RegistrationSoloCreateService, registrationDeleteService: RegistrationSoloDeleteService);
    register(createRegistrationDto: CreateRegistrationSoloDto): Promise<RegistrationSolo>;
    delete(id: string): Promise<RegistrationSolo>;
    getAllRegistrations(): Promise<RegistrationSolo[]>;
    getRegistrationById(id: string): Promise<RegistrationSolo>;
}
