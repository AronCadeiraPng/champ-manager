import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { Registration } from './entities/registration.entity';
export declare class RegistrationsController {
    private readonly registrationsService;
    constructor(registrationsService: RegistrationsService);
    register(createRegistrationDto: CreateRegistrationDto, req: any): Promise<Registration>;
    getAllRegistrations(): Promise<Registration[]>;
}
