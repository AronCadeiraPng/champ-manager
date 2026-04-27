import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, Unique, UpdateDateColumn } from "typeorm";
import { User } from "../../../users/models/entity/user.entity";
import { Championship } from "../../../championships/models/entity/championship.entity";
import { Participant } from "../../../participant/models/entity/participant.entity";

@Entity('registrations-solo')
@Unique(['userId', 'championshipId'])
export class RegistrationSolo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', name: 'user_id' })
    userId: string;

    @Column({type: 'varchar', name: 'championship_id' })
    championshipId: string;

    @ManyToOne(() => User, (user) => user.registrationsSolo)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Championship, (championship) => championship.registrationsSolo)
    @JoinColumn({ name: 'championship_id' })
    championship: Championship;

    @OneToOne(() => Participant, (participant) => participant.registrationSolo, { nullable: true })
    participant?: Participant;
    
    @CreateDateColumn({ name: 'registred_at', type: 'timestamptz' })
    registredAt: Timestamp;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
    updatedAt: Timestamp;
}
