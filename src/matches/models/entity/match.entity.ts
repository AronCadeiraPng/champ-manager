import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Player } from '../../../players/models/entity/player.entity';
import { MatchStatusEnum } from '../../../_common/enums/match-status.enum';
import { Group } from '../../../groups/models/entity/group.entity';

@Entity('matches')
export class Match {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Index()
    @Column({ type: 'varchar', name: 'winner_id', nullable: true})
    winnerId?: string;

    @Column({ type: 'enum', enum: MatchStatusEnum, default: MatchStatusEnum.PENDING })
    status: MatchStatusEnum;

    @Index()
    @Column({type: 'varchar', name: 'group_id', nullable: true })
    groupId: string;

    @OneToMany(() => Player, (player) => player.match, { nullable: true })
    players?: Player[];

    @ManyToOne(() => Group, (group) => group.matches, { nullable: true })
    @JoinColumn({ name: 'group_id' })
    group?: Group;

    @CreateDateColumn({ type: 'date', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'date', name: 'updated_at' })
    updatedAt: Date;
}
