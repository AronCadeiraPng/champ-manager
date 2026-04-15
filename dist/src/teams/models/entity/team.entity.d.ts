import { Timestamp } from "typeorm";
import { Member } from "../../../members/models/entity/member.entity";
import { RegistrationTeam } from "../../../registrations-team/models/entity/registration-team.entity";
export declare class Team {
    id: string;
    name?: string;
    championshipId?: string;
    registrationId?: string;
    members?: Member[];
    registration: RegistrationTeam;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
