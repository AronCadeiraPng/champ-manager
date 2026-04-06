import { Sport } from "src/sports/models/entity/sport.entity";
import { Repository } from "typeorm";
export declare class SportFindService {
    private readonly sportRepository;
    constructor(sportRepository: Repository<Sport>);
    findSportByName(name: string): Promise<Sport | null>;
    findSportById(id: string): Promise<Sport>;
    findAllSport(): Promise<Sport[]>;
}
