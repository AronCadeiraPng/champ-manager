import { CreateSportDto } from '../models/dtos/create-sport.dto';
import { SportCreateService } from '../use-cases/create-sport/create-sport.service';
import { Sport } from '../models/entity/sport.entity';
import { SportFindService } from '../use-cases/find-sport/find-sport.service';
export declare class SportsController {
    private readonly sportCreateService;
    private readonly sportFindService;
    constructor(sportCreateService: SportCreateService, sportFindService: SportFindService);
    create(createSportDto: CreateSportDto): Promise<Sport>;
    getAll(): Promise<Sport[]>;
    findById(id: string): Promise<Sport>;
}
