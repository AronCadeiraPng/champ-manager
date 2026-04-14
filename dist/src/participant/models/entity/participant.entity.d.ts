import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { RegistrationTeam } from "src/registrations-team/models/entity/registration-team.entity";
export declare class Participant {
    id: string;
    userId: string;
    registrationSoloId: string;
    registrationTeamId: string;
    registrationSolo?: RegistrationSolo;
    registrationTeam?: RegistrationTeam;
}
