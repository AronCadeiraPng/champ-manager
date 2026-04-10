import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { User } from "src/users/models/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, Unique } from "typeorm";

@Entity('registrations-solo')
@Unique(['userId', 'championshipId'])
export class RegistrationSolo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', name: 'user-id' })
    userId: string;

    @Column({type: 'varchar', name: 'championship-id' })
    championshipId: string;

    @CreateDateColumn({ type: 'timestamptz' })
    registredAt: Timestamp;

    @ManyToOne(() => User, (user) => user.registrationsSolo)
    @JoinColumn({ name: 'user-id' })
    user: User;

    @ManyToOne(() => ChampionshipSolo, (championship) => championship.registrations)
    @JoinColumn({ name: 'championship-id' })
    championship: ChampionshipSolo
}
