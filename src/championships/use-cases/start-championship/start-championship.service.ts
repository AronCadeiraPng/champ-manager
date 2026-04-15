import { Injectable } from "@nestjs/common";
import { ParticipantCreateService } from "src/participant/use-cases/create-participant/create-participant.service";
import { RegistrationSoloFindService } from "src/registrations-solo/use-cases/find-registration/find-registration.service";

@Injectable()
export class ChampionshipStartService {

    constructor(
        private readonly participantCreateService: ParticipantCreateService,
        private readonly registrationFindService: RegistrationSoloFindService,
    ) { }

    async start(championshipId: string) {
            const registrations = await this.registrationFindService.findRegistrationsByChampionship(championshipId);

            const participants = await Promise.all(
                registrations.map(async (registration) => {
                    const participantDto = {
                        registrationUserId: registration.id,
                    }
                    const participant =  await this.participantCreateService.createParticipant(championshipId, participantDto);
                    return participant;
                    }
                )
            )
    
            return participants;
        }
    }