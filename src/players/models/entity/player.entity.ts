import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Timestamp } from "typeorm";
import { RegistrationSolo } from "../../../registrations-solo/models/entity/registration.entity";
import { Championship } from "src/championships/models/entity/championship.entity";

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

    @ManyToOne(() => Championship, (championship) => championship.players)
    @JoinColumn({ name: 'championship-id' })
    championship: Championship;

    @OneToOne(() => RegistrationSolo)
    @JoinColumn({ name: 'registration-id' })
    registration: RegistrationSolo; 

    @CreateDateColumn({ type: 'timestamptz', name: 'created-at' })
    createdAt: Timestamp;

    @UpdateDateColumn({ name: 'updated-at', type: 'timestamptz' })
    updatedAt: Timestamp;
}
