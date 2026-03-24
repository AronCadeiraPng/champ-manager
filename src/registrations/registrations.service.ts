import { BadRequestException, Injectable } from '@nestjs/common';
import { Registration } from './entities/registration.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { NotFoundException } from 'src/common/exceptions';
import { ChampionshipsService } from 'src/championships/championships.service';
import { UserService } from 'src/users/user.service';

@Injectable()
export class RegistrationsService {
   constructor(
    @InjectRepository(Registration) private readonly registrationsRepository: Repository<Registration>,
    private readonly userService: UserService,
    private readonly championshipsService: ChampionshipsService,
  ) {}

   async register(createRegistrationDto: CreateRegistrationDto, userId: string) {
    const alreadyRegistered = await this.registrationsRepository.findOne({
      where: {userId, championshipId: createRegistrationDto.championshipId}
    })
    if(alreadyRegistered) throw new BadRequestException('Registro já feito')
      
    const user = await this.userService.findUserById(userId)
    const championshipExists = await this.championshipsService.findChampionshipById(createRegistrationDto.championshipId)
    
    if(!championshipExists) throw new NotFoundException('Torneio', createRegistrationDto.championshipId)
    const registration = this.registrationsRepository.create({
      userName: user.name,
      userId,
      championshipName: championshipExists.name,
      championshipId: createRegistrationDto.championshipId
    })
    return this.registrationsRepository.save(registration);
    }

    async allRegisters(): Promise<Registration[]> {
      return await this.registrationsRepository.find()
    }

    async findRegisterById(id: string) {
      const registration = await this.registrationsRepository.findOneBy({id})
      if(!registration) throw new NotFoundException('Registro',id)
      return registration;
    }

  async deleteRegistration(id: string) {
    const registration = await this.findRegisterById(id)
    return this.registrationsRepository.remove(registration)
  }
}
