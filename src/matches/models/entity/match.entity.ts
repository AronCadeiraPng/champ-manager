import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { MatchStatusEnum } from "../../../_common/enums/match-status.enum";
import { Group } from "../../../_modules/groups/models/entity/group.entity";
import { Player } from "../../../_modules/players/models/entity/player.entity";

@Entity('matches')
export class Match {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', name: 'winner_id', nullable: true})
    winnerId?: string;

    @Column({ type: 'enum', enum: MatchStatusEnum, default: MatchStatusEnum.PENDING })
    status: MatchStatusEnum;

    @Column({type: 'varchar', name: 'group_id', nullable: true })
    groupId: string;

    @OneToMany(() => Player, (player) => player.match, { nullable: true })
    players?: Player[];

    @ManyToOne(() => Group, (group) => group.matches)
    @JoinColumn({ name: 'group_id' })
    group: Group;

    @CreateDateColumn({ type: 'date', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'date', name: 'updated_at' })
    updatedAt: Date;
}
