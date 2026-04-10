import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp } from "typeorm";

@Entity('players')
export class Player {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', name: 'registration-id' })
    registrationId: string;       

    @Column({ type: 'varchar', name: 'championship-id' })
    championshipId: string;

    @Column({ type: 'varchar', name: 'match-id', nullable: true })
    matchId: string;

    @Column({ type: 'integer', name: 'points', default: 0 })
    points?: number;

    @ManyToOne(() => ChampionshipSolo, (championship) => championship.players)
    @JoinColumn({ name: 'championship-id' })
    championship: ChampionshipSolo;

    @OneToOne(() => RegistrationSolo)
    @JoinColumn({ name: 'registration-id' })
    registration: RegistrationSolo; 

    // @ManyToOne(() => Match, (match) => match.players)
    // @JoinColumn({ name: 'match-id' })
    // match: Match;

    @CreateDateColumn({ type: 'timestamptz', name: 'created-at' })
    createdAt: Timestamp;
}
