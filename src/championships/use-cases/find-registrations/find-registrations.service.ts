import { Injectable } from "@nestjs/common";
import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { RegistrationSoloFindService } from "src/registrations-solo/use-cases/find-registration/find-registration.service";
import { RegistrationTeam } from "src/registrations-team/models/entity/registration-team.entity";
import { RegistrationTeamFindService } from "src/registrations-team/use-cases/find-registration/find-registration.service";
import { ChampionshipFindService } from "../find-championship/find-championship.service";
import { error } from "console";
import { BadRequestException } from "src/common/exceptions/bad-request.exception";
import { ModalityEnum } from "src/common/enums/modality.enum";

@Injectable()
export class ChampionshipFindRegistrationsService {
    constructor(
        private readonly championshipFindService: ChampionshipFindService,
        private readonly registrationSoloFindService: RegistrationSoloFindService,
        private readonly registrationTeamFindService: RegistrationTeamFindService
    ) {}

    async findRegistrations(championshipId: string) {
        const championship = await this.championshipFindService.findChampionshipById(championshipId);

        if(championship.modality == ModalityEnum.SOLO) {
            const registrations = await this.registrationSoloFindService.findRegistrationsByChampionship(championshipId);
            
            if(registrations.length < 1) throw new BadRequestException('Nenhum registro encontrado.', 204);

            return registrations;
        }

        if(championship.modality == ModalityEnum.TEAM) {
            const registrations = await this.registrationSoloFindService.findRegistrationsByChampionship(championshipId);

            if(registrations.length < 1) throw new BadRequestException('Nenhum registro encontrado.', 204);

            return registrations;
        }
    }
}