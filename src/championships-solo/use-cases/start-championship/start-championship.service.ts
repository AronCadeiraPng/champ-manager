import { Injectable } from "@nestjs/common";
import { PlayerCreateService } from "src/players/use-cases/create-player/create-player.service";
import { RegistrationSoloFindService } from "src/registrations-solo/use-cases/find-registration/find-registration.service";

@Injectable()
export class ChampionshipStartService {

    constructor(
        private readonly playerCreateService: PlayerCreateService,
        private readonly registrationFindService: RegistrationSoloFindService,
    ) { }

    async start(championshipId: string) {
            const registrations = await this.registrationFindService.findRegistrationsByChampionship(championshipId);
    
            const players = await Promise.all(
                registrations.map(async (registration) => {
                    const playerDto = {
                        registrationId: registration.id,
                        championshipId: registration.championshipId
                    }
                    const player =  await this.playerCreateService.create(playerDto);
                    return player;
                    }
                )
            )
    
            return players;
        }
    }   