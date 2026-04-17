import { Injectable } from "@nestjs/common";
import { ParticipantCreateService } from "src/participant/use-cases/create-participant/create-participant.service";
import { RegistrationSoloFindService } from "src/registrations-solo/use-cases/find-registration/find-registration.service";
import { ChampionshipFindService } from "../find-championship/find-championship.service";

@Injectable()
export class ChampionshipStartService {

    constructor(
        private readonly participantCreateService: ParticipantCreateService,
        private readonly registrationFindService: RegistrationSoloFindService,
        private readonly championshipFindService: ChampionshipFindService
    ) { }

    async start(championshipId: string) {
        const championship = await this.championshipFindService.findChampionshipById(championshipId)

        if(championship.modality == 'solo-game') {
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

        if(championship.modality == 'team-game') {
            const registrations = await this.registrationFindService.findRegistrationsByChampionship(championshipId);
            const participants = await Promise.all(
                registrations.map(async (registration) => {
                    const participantDto = {
                        registrationTeamId: registration.id,
                    }
                    const participant =  await this.participantCreateService.createParticipant(championshipId, participantDto);
                    return participant;
                    }
                )
            )

            return participants;
            }
        }
}