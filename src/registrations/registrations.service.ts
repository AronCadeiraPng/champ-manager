import { BadRequestException, Injectable } from '@nestjs/common';
import { Registration } from './entities/registration.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegistrationDto } from './dto/create-registration.dto';

@Injectable()
export class RegistrationsService {
   constructor(@InjectRepository(Registration) private readonly registrationsRepository: Repository<Registration>,) {}

   async register(createRegistrationDto: CreateRegistrationDto, userId: string) {
    const alreadyRegistered = await this.registrationsRepository.findOne({
      where: {userId, championshipId: createRegistrationDto.championshipId}
    })
    if(alreadyRegistered) throw new BadRequestException('Registro já feito')
      
    const registration = this.registrationsRepository.create({
      userId,
      championshipId: createRegistrationDto.championshipId
    })
    return this.registrationsRepository.save(registration);
    }

    async allRegisters(): Promise<Registration[]> {
      return await this.registrationsRepository.find()
    }

    async findRegisterById(id: string) {
    return await this.registrationsRepository.findOneBy({id})
  }
}
