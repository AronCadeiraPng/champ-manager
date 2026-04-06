import { Sport } from "src/sports/models/entity/sport.entity";
import { Repository } from "typeorm";
export declare class SportDeleteService {
    private readonly sportRepository;
    constructor(sportRepository: Repository<Sport>);
    delete(id: string): Promise<Sport | null>;
}
