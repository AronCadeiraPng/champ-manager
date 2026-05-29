
import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';
import { Championship } from '../../../championships/models/entity/championship.entity';
import { Match } from '../../../matches/models/entity/match.entity';
import { PhaseEnum } from '../../../../_common/enums/phase-name.enum';

@Entity('groups')
export class Group {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ type: 'enum', enum: PhaseEnum })
    phase: PhaseEnum;

    @Index()
    @Column({ type: 'varchar', name: 'championship_id' })
    championshipId: string;

    @ManyToOne(() => Championship, (championship) => championship.groups)
    @JoinColumn({ name: 'championship_id' })
    championship: Championship;

    @OneToMany(() => Match, (Match) => Match.group, {nullable: true})
    matches?: Match[];
}