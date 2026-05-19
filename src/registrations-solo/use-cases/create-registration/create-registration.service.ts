import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadRequestException } from '../../../_common/exceptions/bad-request.exception';
import { UserFindService } from '../../../users/use-cases/find-user/find-user.service';
import { RegistrationSolo } from '../../models/entity/registration.entity';
import { CreateRegistrationSoloDto } from '../../models/dtos/create-registration.dto';
import { ChampionshipFindService } from '../../../championships/use-cases/find-championship/find-championship.service';
import { ModalityEnum } from '../../../_common/enums/modality.enum';

@Injectable()
export class RegistrationSoloCreateService {
  logger = new Logger(RegistrationSoloCreateService.name, { timestamp: true });

  constructor(
    @InjectRepository(RegistrationSolo)
    private readonly registrationSoloRepository: Repository<RegistrationSolo>,
    private readonly userFindService: UserFindService,
    private readonly championshipFindService: ChampionshipFindService,
  ) {}

  async register(championshipId: string, userId: string) {
    this.logger.log('Criando usuário...');
    const user = await this.userFindService.findUserById(userId);
    const championship =
      await this.championshipFindService.findChampionshipById(championshipId);

    if (championship.modality !== ModalityEnum.SOLO)
      throw new BadRequestException('Torneio apenas para um jogador', 400);

    const alreadyRegistered = await this.registrationSoloRepository.findOne({
      where: {
        user: { id: user.id },
        championship: { id: championship.id },
      },
    });

    if (alreadyRegistered)
      throw new BadRequestException('Usuário já registrado neste torneio', 400);

    if (user.gender !== championship.gender)
      throw new BadRequestException(
        'Gênero não correspondente ao do torneio',
        400,
      );

    const nowDate = new Date();
    if (championship.registrationEnd < nowDate)
      throw new BadRequestException('Período de inscrição encerrado', 400);

    const registration = this.registrationSoloRepository.create({
      championship,
      user,
    });

    return this.registrationSoloRepository.save(registration);
  }
}
