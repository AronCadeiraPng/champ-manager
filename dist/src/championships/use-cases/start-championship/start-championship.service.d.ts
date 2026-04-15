import { ParticipantCreateService } from "src/participant/use-cases/create-participant/create-participant.service";
import { RegistrationSoloFindService } from "src/registrations-solo/use-cases/find-registration/find-registration.service";
export declare class ChampionshipStartService {
    private readonly participantCreateService;
    private readonly registrationFindService;
    constructor(participantCreateService: ParticipantCreateService, registrationFindService: RegistrationSoloFindService);
    start(championshipId: string): Promise<import("../../../participant/models/entity/participant.entity").Participant[]>;
}
