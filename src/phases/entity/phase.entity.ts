import { Championship } from "src/championships/models/entity/championship.entity";
import { PhaseName } from "src/common/enums/phase-name.enum";
import { PhaseStatus } from "src/common/enums/phase-status.enum";
import { Match } from "src/matches/models/entity/match.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('phases')
export class Phase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ enum: PhaseName , default: PhaseName.GROUP_FASE})
    name: string; 

    @Column({ enum: PhaseStatus, default: PhaseStatus.IN_PROGRESS })
    phaseStatus: PhaseStatus;

    @Column({ type: 'varchar', name: 'championship_id' })
    championshipId: string;

    @ManyToOne(() => Championship, (championship) => championship.phases)
    @JoinColumn({ name: 'championship_id' })
    championship: Championship;

    @OneToMany(() => Match, (match) => match.players, { nullable: true })
    matches?: Match[];

    @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
    updatedAt: Timestamp;
}
