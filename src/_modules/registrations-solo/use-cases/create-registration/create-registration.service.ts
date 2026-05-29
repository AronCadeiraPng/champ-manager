import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistrationSolo } from '../../models/entity/registration.entity';
import { ChampionshipFindService } from '../../../championships/use-cases/find-championship/find-championship.service';
import { FindUserByIdService } from '../../../users/use-cases/find-by-id/find-by-id.service';
import { ModalityEnum } from '../../../../_common/enums/modality.enum';

@Injectable()
export class RegistrationSoloCreateService {
  logger = new Logger(RegistrationSoloCreateService.name, { timestamp: true });

  constructor(
    @InjectRepository(RegistrationSolo)
    private readonly registrationSoloRepository: Repository<RegistrationSolo>,
    private readonly findUserById: FindUserByIdService,
    private readonly championshipFindService: ChampionshipFindService,
  ) {}

  async register(championshipId: string, userId: string) {
    this.logger.log('Criando usuário...');
    const user = await this.findUserById.execute(userId);
    const championship =
      await this.championshipFindService.findChampionshipById(championshipId);

    if (championship.modality !== ModalityEnum.SOLO)
      throw new BadRequestException('Torneio apenas para um jogador');

    const alreadyRegistered = await this.registrationSoloRepository.findOne({
      where: {
        user: { id: user.id },
        championship: { id: championship.id },
      },
    });

    if (alreadyRegistered)
      throw new BadRequestException('Usuário já registrado neste torneio');

    if (user.gender !== championship.gender)
      throw new BadRequestException(
        'Gênero não correspondente ao do torneio',
      );
      

    const nowDate = new Date();
    if (championship.registrationEnd < nowDate)
      throw new BadRequestException('Período de inscrição encerrado');

    const registration = this.registrationSoloRepository.create({
      championship,
      user,
    });

    return this.registrationSoloRepository.save(registration);
  }
}
