import { Championship } from "src/championships/models/entity/championship.entity";
import { PhaseEnum } from "src/common/enums/phase-name.enum";
import { PhaseStatusEnum } from "src/common/enums/phase-status.enum";
import { Match } from "src/matches/models/entity/match.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('phases')
export class Phase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({  type: 'enum', enum: PhaseEnum , default: PhaseEnum.GROUP_FASE})
    name: PhaseEnum; 

    @Column({ type: 'enum', enum: PhaseStatusEnum, default: PhaseStatusEnum.IN_PROGRESS })
    status: PhaseStatusEnum;

    @Column({ type: 'varchar', name: 'championship_id' })
    championshipId: string;

    @ManyToOne(() => Championship, (championship) => championship.phases)
    @JoinColumn({ name: 'championship_id' })
    championship: Championship;

    @OneToMany(() => Match, (match) => match.phase, { nullable: true })
    matches?: Match[];

    @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
    updatedAt: Timestamp;
}
