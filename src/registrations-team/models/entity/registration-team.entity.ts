import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Timestamp } from "typeorm";
import { Team } from "../../../teams/models/entity/team.entity";
import { Participant } from "src/participant/models/entity/participant.entity";
import { Championship } from "src/championships/models/entity/championship.entity";

@Entity('registrations-team')
export class RegistrationTeam {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'championship-id' })
    championshipId: string;

    @OneToMany(() => Team, (team) => team.registration)
    @JoinColumn({ name: 'team-id' })
    team: Team[];

    @OneToOne(() => Participant, { nullable: true })
    participant?: Participant;

    @ManyToOne(() => Championship, (championship) => championship.registrations)
    @JoinColumn({ name: 'championship-id' })
    championship: Championship;

    @CreateDateColumn({ name: 'created-at', type: 'timestamptz' })
    createdAt: Timestamp;

    @UpdateDateColumn({ name: 'updated-at', type: 'timestamptz' })
    updatedAt: Timestamp;
}
