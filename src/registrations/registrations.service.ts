import { Injectable } from '@nestjs/common';
import { Registration } from './entities/registration.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { NotFoundException } from 'src/common/exceptions';
import { ChampionshipsService } from 'src/championships/championships.service';
import { UserService } from 'src/users/user.service';
import { BadRequestException } from 'src/common/exceptions/bad-request.exception';

@Injectable()
export class RegistrationsService {
   constructor(
    @InjectRepository(Registration) private readonly registrationsRepository: Repository<Registration>,
    private readonly userService: UserService,
    private readonly championshipsService: ChampionshipsService,
  ) {}

   async register(createRegistrationDto: CreateRegistrationDto, userIdDto: string) {      
    const user = await this.userService.findUserById(userIdDto)
    const championship = await this.championshipsService.findChampionshipById(createRegistrationDto.championshipId)
    
    const alreadyRegistered = await this.registrationsRepository.findOne({
      where: {
        userId: userIdDto,
      }
    })
    if(alreadyRegistered) throw new BadRequestException('Registro já feito', 400);

    const nowDate = new Date();

    if(user.gender !== championship.gender) throw new BadRequestException('Gênero não correspondente ao do torneio', 400);

    if(championship.registrationEnd < nowDate) throw new BadRequestException('Período de inscrição encerrado', 400);

    if(!championship) throw new NotFoundException('Torneio', createRegistrationDto.championshipId);
    const registration = this.registrationsRepository.create
    ({
      userName: user.name,
      userId: userIdDto,
      championshipName: championship.name,
      championshipId: createRegistrationDto.championshipId
    })

    return this.registrationsRepository.save(registration);
    }

    async allRegisters(): Promise<Registration[]> {
      return await this.registrationsRepository.find()
    }

    async findRegisterById(id: string) {
      const registration = await this.registrationsRepository.findOneBy({id});
      if(!registration) throw new NotFoundException('Registro',id);

      return registration;
    }

  async deleteRegistration(id: string) {
    const registration = await this.findRegisterById(id);

    return this.registrationsRepository.remove(registration);
  }
}
