import { Championship } from "src/championships/models/entity/championship.entity";
import { PhaseName } from "src/common/enums/phase-name.enum";
import { Match } from "src/matches/models/entity/match.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('phases')
export class Phase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ enum: PhaseName })
    name: string; 

    @Column({ type: 'varchar', name: 'championship_id' })
    championshipId: string;

    @ManyToOne(() => Championship, (championship) => championship.phases)
    @JoinColumn({ name: 'championship_id' })
    championship: Championship;

    @OneToMany(() => Match, (match) => match.players)
    matches: Match[];

    @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
    updatedAt: Timestamp;
}
