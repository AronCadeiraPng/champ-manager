import { Injectable } from '@nestjs/common';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Championship } from './entities/championship.entity';
import { Repository } from 'typeorm';
import { BadRequestException } from 'src/common/exceptions/bad-request.exception';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { Registration } from 'src/registrations/entities/registration.entity';
import { NotFoundException } from 'src/common/exceptions';

@Injectable()
export class ChampionshipsService {
    constructor(
      @InjectRepository(Championship) private readonly championshipsRepository: Repository<Championship>,
      @InjectRepository(Registration) private readonly registrationsRepository: Repository<Registration>
  ) {}

  ///=========================CRIA UM TORNEIO=========================///
  async createChampionship(createChampionshipDto: CreateChampionshipDto) {
    const championship = this.championshipsRepository.create(createChampionshipDto);
    const championshipExists = await this.findChampionshipByName(createChampionshipDto.name);
    if(championshipExists) throw new BadRequestException('Torneio com este nome já existe', 400)

    return this.championshipsRepository.save(championship);
  }

  ///=========================UPDATE=========================///
  async updateChampionship(id: string, updateChampionshipDto: UpdateChampionshipDto) {
    const championship = await this.findChampionshipById(id);
    Object.assign(championship, updateChampionshipDto);

    return this.championshipsRepository.save(championship);
  }

  ///=========================DELETE=========================///
  async deleteChampionship(id: string) {
    const championship = await this.findChampionshipById(id);

    return this.championshipsRepository.remove(championship);
  }

  ///=========================MÉTODOS GET & FIND=========================///
  async findAllChampionships(): Promise<Championship[]> {
    return await this.championshipsRepository.find();
  }

  async findAllRegistrations(id: string) {
    const championship = await this.findChampionshipById(id)
    return this.registrationsRepository.find({
      where: 
      {
        championshipId: championship.id
      }
    })
  }

  async findChampionshipByName(name: string) {
    return await this.championshipsRepository.findOneBy({name});
  }

  async findChampionshipById(id: string) {
    const championship = await this.championshipsRepository.findOneBy({id});
    if(!championship) throw new NotFoundException('Torneio', id);

    return championship;
  }
}
