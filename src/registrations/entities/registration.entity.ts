import { Championship } from "src/championships/entities/championship.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, Unique } from "typeorm";

@Entity('registrations')
@Unique(['userId', 'championshipId'])
export class Registration {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    userName: string;

    @Column()
    championshipId: string;

    @Column()
    championshipName: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Championship, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'championshipId' })
    championship: Championship;

    @CreateDateColumn({ type: 'timestamptz' })
    registredAt: Timestamp;
}
