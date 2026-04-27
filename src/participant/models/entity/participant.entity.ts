import { Match } from "src/matches/models/entity/match.entity";
import { Player } from "src/players/models/entity/player.entity";
import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { RegistrationTeam } from "src/registrations-team/models/entity/registration-team.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('participants')
export class Participant {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'registration-user_id', type: 'varchar', nullable: true })
    registrationUserId?: string;

    @Column({ name: 'registration-team_id', type: 'varchar', nullable: true })
    registrationTeamId?: string;
    
    @OneToOne(() => RegistrationSolo, { nullable: true })
    @JoinColumn({ name: 'registration_user_id' })
    registrationSolo?: RegistrationSolo;
    
    @OneToOne(() => RegistrationTeam, { nullable: true })
    @JoinColumn({ name: 'registration_team_id' })
    registrationTeam?: RegistrationTeam;
    
    @OneToMany(() => Player, (player) => player.participant, { nullable: true })
    player?: Player;
}
