import { Injectable } from "@nestjs/common";
import { ParticipantCreateService } from "src/participant/use-cases/create-participant/create-participant.service";
import { RegistrationSoloFindService } from "src/registrations-solo/use-cases/find-registration/find-registration.service";
import { ChampionshipFindService } from "../find-championship/find-championship.service";
import { RegistrationTeamFindService } from "src/registrations-team/use-cases/find-registration/find-registration.service";

@Injectable()
export class ChampionshipStartService {

    constructor(
        private readonly participantCreateService: ParticipantCreateService,
        private readonly registrationSoloFindService: RegistrationSoloFindService,
        private readonly registrationTeamFindService: RegistrationTeamFindService,
        private readonly championshipFindService: ChampionshipFindService
    ) { }

    async start(championshipId: string) {
        const championship = await this.championshipFindService.findChampionshipById(championshipId)
        const registrations = await this.registrationSoloFindService.findRegistrationsByChampionship(championshipId);

        if (championship.modality == 'solo-game') {
            console.log('é solo')
            const participants = await Promise.all(
                registrations.map(async (registration) => {
                    const participantDto = {
                        registrationUserId: registration.id,
                    }
                    const participant = await this.participantCreateService.createParticipant(championshipId, participantDto);
                    return participant;
                }
                )
            )
            return participants;
        }

        if (championship.modality == 'team-game') {
            console.log('é time')
            const registrations = await this.registrationTeamFindService.findRegistrationsByChampionship(championshipId);
            const participants = await Promise.all(
                registrations.map(async (registration) => {
                    const participantDto = {
                        registrationTeamId: registration.id,
                    }
                    const participant = await this.participantCreateService.createParticipant(championshipId, participantDto);
                    return participant;
                }
                )
            )

            return participants;
        }
    }
}

