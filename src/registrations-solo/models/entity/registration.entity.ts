import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, Unique, UpdateDateColumn } from "typeorm";
import { User } from "../../../users/models/entity/user.entity";
import { Championship } from "src/championships/models/entity/championship.entity";
import { Participant } from "src/participant/models/entity/participant.entity";

@Entity('registrations-solo')
@Unique(['userId', 'championshipId'])
export class RegistrationSolo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', name: 'user-id' })
    userId: string;

    @Column({type: 'varchar', name: 'championship-id' })
    championshipId: string;

    @ManyToOne(() => User, (user) => user.registrationsSolo)
    @JoinColumn({ name: 'user-id' })
    user: User;

    @ManyToOne(() => Championship, (championship) => championship.registrations)
    @JoinColumn({ name: 'championship-id' })
    championship: Championship;

    @OneToOne(() => Participant, { nullable: true })
    participant?: Participant;
    
    @CreateDateColumn({ name: 'registred-at', type: 'timestamptz' })
    registredAt: Timestamp;

    @UpdateDateColumn({ name: 'updated-at', type: 'timestamptz' })
    updatedAt: Timestamp;
}
