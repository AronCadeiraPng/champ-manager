import { CreateSportDto } from '../models/dtos/create-sport.dto';
import { SportCreateService } from '../use-cases/create-sport/create-sport.service';
import { Sport } from '../models/entity/sport.entity';
import { SportFindService } from '../use-cases/find-sport/find-sport.service';
import { UpdateSportDto } from '../models/dtos/update-sport.dto';
import { SportUpdateService } from '../use-cases/update-sport/update-sport.service';
import { SportDeleteService } from '../use-cases/delete-sport/delete-sport.service';
export declare class SportsController {
    private readonly sportCreateService;
    private readonly sportFindService;
    private readonly sportDeleteService;
    private readonly sportUpdateService;
    constructor(sportCreateService: SportCreateService, sportFindService: SportFindService, sportDeleteService: SportDeleteService, sportUpdateService: SportUpdateService);
    create(createSportDto: CreateSportDto): Promise<Sport>;
    getAll(): Promise<Sport[]>;
    findById(id: string): Promise<Sport>;
    update(id: string, updateSportDto: UpdateSportDto): Promise<Sport>;
    deleteById(id: string): Promise<Sport | null>;
}
