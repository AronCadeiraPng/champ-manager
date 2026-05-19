import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '../../../_common/exceptions';
import { Player } from '../../models/entity/player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerFindService {
    constructor (
        @InjectRepository(Player) private readonly playerRepository: Repository<Player>,
    ) {}

    async byId(id: string): Promise<Player> {
        const player = await this.playerRepository.findOne({
            where: {
                id: id
            }
        })

        if(!player) throw new NotFoundException('Jogador', id);

        return player;
    }


    async All(): Promise<Player[]> {
        const players = await this.playerRepository.find();
        
        return players
    }


    async ByPhase(phaseId: string): Promise<Player[]> {
        return await this.playerRepository.find({
            where: {
                match: {
                    // phaseId: phaseId                    
                }
            }
        })
    }

    // byPhase(phaseId: string): Promise<Player[]> {}
}
