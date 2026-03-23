import { ConflictException, ExecutionContext, Injectable, NotFoundException } from '@nestjs/common';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Championship } from './entities/championship.entity';
import { Repository } from 'typeorm';
import { BadRequestException } from 'src/common/exceptions/bad-request.exception';
import { UpdateChampionshipDto } from './dto/update-championship.dto';

@Injectable()
export class ChampionshipsService {
    constructor(@InjectRepository(Championship) private readonly championshipsRepository: Repository<Championship>) {}

  async createChampionship(createChampionshipDto: CreateChampionshipDto) {
    const championship = this.championshipsRepository.create(createChampionshipDto);
    const championshipExists = await this.findChampionshipByName(createChampionshipDto.name);
    if(championshipExists) throw new BadRequestException('Torneio com este nome já existe', 400)
    return this.championshipsRepository.save(championship);
  }

  async updateChampionship(id: string, updateChampionshipDto: UpdateChampionshipDto) {
    const championship = await this.findChampionshipById(id);
    Object.assign(championship, updateChampionshipDto);
    return this.championshipsRepository.save(championship);
  }

  async deleteChampionship(id: string) {
    const championship = await this.findChampionshipById(id);
    if(!championship) throw new NotFoundException('Torneio', id);
    return this.championshipsRepository.remove(championship);
  }

  async findAllChampionships(): Promise<Championship[]> {
    return await this.championshipsRepository.find();
  }

  async findChampionshipByName(name: string) {
    return await this.championshipsRepository.findOneBy({name});
  }

  async findChampionshipById(id: string) {
    const championship = await this.championshipsRepository.findOneBy({id});
    if(!championship) throw new NotFoundException('Torneio não encontrado', id);
    return championship;
  }
}
