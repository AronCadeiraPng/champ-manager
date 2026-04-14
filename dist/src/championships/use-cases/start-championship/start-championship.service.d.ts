import { PlayerCreateService } from "src/players/use-cases/create-player/create-player.service";
import { RegistrationSoloFindService } from "src/registrations-solo/use-cases/find-registration/find-registration.service";
export declare class ChampionshipStartService {
    private readonly playerCreateService;
    private readonly registrationFindService;
    constructor(playerCreateService: PlayerCreateService, registrationFindService: RegistrationSoloFindService);
    start(championshipId: string): Promise<import("../../../players/models/entity/player.entity").Player[]>;
}
