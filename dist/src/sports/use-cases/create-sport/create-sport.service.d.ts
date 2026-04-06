import { CreateSportDto } from '../../models/dtos/create-sport.dto';
import { Sport } from '../../models/entity/sport.entity';
import { Repository } from 'typeorm';
import { SportFindService } from '../find-sport/find-sport.service';
export declare class SportCreateService {
    private readonly sportRepository;
    private readonly sportFindService;
    constructor(sportRepository: Repository<Sport>, sportFindService: SportFindService);
    create(createSportDto: CreateSportDto): Promise<Sport>;
}
