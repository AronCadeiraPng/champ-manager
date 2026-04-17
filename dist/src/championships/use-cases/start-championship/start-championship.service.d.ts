import { ParticipantCreateService } from "src/participant/use-cases/create-participant/create-participant.service";
import { RegistrationSoloFindService } from "src/registrations-solo/use-cases/find-registration/find-registration.service";
import { ChampionshipFindService } from "../find-championship/find-championship.service";
export declare class ChampionshipStartService {
    private readonly participantCreateService;
    private readonly registrationFindService;
    private readonly championshipFindService;
    constructor(participantCreateService: ParticipantCreateService, registrationFindService: RegistrationSoloFindService, championshipFindService: ChampionshipFindService);
    start(championshipId: string): Promise<import("../../../participant/models/entity/participant.entity").Participant[] | undefined>;
}
