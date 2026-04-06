import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
export declare class Sport {
    id: string;
    name: string;
    deleted?: boolean;
    championship: ChampionshipSolo;
}
