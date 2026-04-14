import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadRequestException } from 'src/common/exceptions/bad-request.exception';
import { UserFindService } from 'src/users/use-cases/find-user/find-user.service';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { CreateRegistrationSoloDto } from 'src/registrations-solo/models/dtos/create-registration.dto';
import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';

@Injectable()
export class RegistrationSoloCreateService {
   constructor(
    @InjectRepository(RegistrationSolo) private readonly registrationSoloRepository: Repository<RegistrationSolo>,
    private readonly userFindService: UserFindService,
    private readonly championshipFindService: ChampionshipFindService,
  ) {}

   async register(createRegistrationDto: CreateRegistrationSoloDto) {      
    const user = await this.userFindService.findUserById(createRegistrationDto.userId)
    const championship = await this.championshipFindService.findChampionshipById(createRegistrationDto.championshipId)
    
    const alreadyRegistered = await this.registrationSoloRepository.findOne({
      where: {
        user: { id: user.id },
        championship: { id: championship.id }
      }
    });

    if(alreadyRegistered) throw new BadRequestException('Registro já feito', 400);

    if(user.gender !== championship.gender) throw new BadRequestException('Gênero não correspondente ao do torneio', 400);
    
    const nowDate = new Date();
    if(championship.registrationEnd < nowDate) throw new BadRequestException('Período de inscrição encerrado', 400);

    const registration = this.registrationSoloRepository.create
    ({
      championship,
      user
    })

    return this.registrationSoloRepository.save(registration);
    }
}