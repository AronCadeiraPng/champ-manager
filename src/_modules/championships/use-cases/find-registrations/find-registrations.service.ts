import { Injectable, BadRequestException } from '@nestjs/common';
import { RegistrationSoloFindService } from '../../../registrations-solo/use-cases/find-registration/find-registration.service';
import { ChampionshipFindService } from '../find-championship/find-championship.service';
import { ModalityEnum } from '../../../../_common/enums/modality.enum';


@Injectable()
export class ChampionshipFindRegistrationsService {
    constructor(
        private readonly championshipFindService: ChampionshipFindService,
        private readonly registrationSoloFindService: RegistrationSoloFindService,
    ) {}

    async findRegistrations(championshipId: string) {
        const championship = await this.championshipFindService.findChampionshipById(championshipId);

        if(championship.modality == ModalityEnum.SOLO) {
            const registrations = await this.registrationSoloFindService.findRegistrationsByChampionship(championshipId);
            
            if(registrations.length < 1) throw new BadRequestException('Nenhum registro encontrado.');

            return registrations;
        }

        if(championship.modality == ModalityEnum.TEAM) {
            const registrations = await this.registrationSoloFindService.findRegistrationsByChampionship(championshipId);

            if(registrations.length < 1) throw new BadRequestException('Nenhum registro encontrado.');

            return registrations;
        }
    }
}