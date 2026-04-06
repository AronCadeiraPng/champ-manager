import { Sport } from "src/sports/models/entity/sport.entity";
import { Repository } from "typeorm";
import { SportFindService } from "../find-sport/find-sport.service";
import { UpdateSportDto } from "src/sports/models/dtos/update-sport.dto";
export declare class SportUpdateService {
    private readonly sportRepository;
    private readonly sportFindService;
    constructor(sportRepository: Repository<Sport>, sportFindService: SportFindService);
    update(id: string, updateSportDto: UpdateSportDto): Promise<Sport>;
}
