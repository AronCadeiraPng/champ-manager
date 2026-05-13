import { Championship } from '../../championships/models/entity/championship.entity';
import { PhaseEnum } from '../../common/enums/phase-name.enum';
import { PhaseStatusEnum } from '../../common/enums/phase-status.enum';
import { Match } from '../../matches/models/entity/match.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';

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

    @ManyToOne(() => Championship, (championship) => championship.groups)
    @JoinColumn({ name: 'championship_id' })
    championship: Championship;

    @OneToMany(() => Match, (match) => match.group, { nullable: true })
    matches?: Match[];

    @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
    updatedAt: Timestamp;
}
