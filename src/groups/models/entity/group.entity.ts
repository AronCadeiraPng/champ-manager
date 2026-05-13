
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Championship } from '../../../championships/models/entity/championship.entity';
import { Match } from '../../../matches/models/entity/match.entity';

@Entity('groups')
export class Group {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ type: 'varchar', name: 'championship_id' })
    championshipId: string;

    @ManyToOne(() => Championship, (championship) => championship.groups)
    @JoinColumn({ name: 'championship_id' })
    championship: Championship;

    @OneToMany(() => Match, (Match) => Match.group)
    matches: Match[];
}