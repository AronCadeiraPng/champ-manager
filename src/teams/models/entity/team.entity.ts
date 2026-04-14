import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Timestamp } from "typeorm";
import { Member } from "../../../members/models/entity/member.entity";
import { RegistrationTeam } from "../../../registrations-team/models/entity/registration-team.entity";

@Entity('teams')
export class Team {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', name: 'name', nullable: true })
    name?: string;

    @Column({ name: 'championship-id' })
    championshipId: string;

    @Column({ name: 'registration-id', nullable: true })
    registrationId?: string;

    @OneToMany(() => Member, (member) => member.team, { nullable: true })
    members?: Member[];

    @ManyToOne(() => RegistrationTeam, (registration) => registration.team)
    @JoinColumn({ name: 'registration-id' })
    registration: RegistrationTeam;

    @CreateDateColumn({ name: 'created-at', type: 'timestamptz' })
    createdAt: Timestamp;

    @UpdateDateColumn({ name: 'updated-at', type: 'timestamptz' })
    updatedAt: Timestamp;
}
