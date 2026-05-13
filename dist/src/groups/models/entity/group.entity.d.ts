import { Championship } from "src/championships/models/entity/championship.entity";
import { Match } from "src/matches/models/entity/match.entity";
export declare class Group {
    id: string;
    championshipId: string;
    championship: Championship;
    matches: Match[];
}
