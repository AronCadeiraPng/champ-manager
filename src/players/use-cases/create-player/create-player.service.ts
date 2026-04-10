import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BadRequestException } from "src/common/exceptions/bad-request.exception";
import { CreatePlayerDto } from "src/players/models/dtos/create-player.dto";
import { Player } from "src/players/models/entity/player.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlayerCreateService {
    constructor(
        @InjectRepository(Player) private readonly playersRepository: Repository<Player>,
    ) {}

    async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
        const playerExists = await this.playersRepository.findOne({
            where: {
                championshipId: createPlayerDto.championshipId,
                registrationId: createPlayerDto.registrationId
            }
        })
        if(playerExists) throw new BadRequestException('Jogador já registrado', 400)

        const player = this.playersRepository.create(createPlayerDto)

        return this.playersRepository.save(player);
    }   
}