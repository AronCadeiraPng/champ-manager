import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { MatchStatusEnum } from "src/common/enums/match-status.enum";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp } from "typeorm";

@Entity('matches')
export class Match {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: MatchStatusEnum, name: 'status', default: MatchStatusEnum.PENDING })
    status?: MatchStatusEnum;

    // @ManyToOne(() => ChampionshipSolo, (championship) => championship.matches)
    // championship: ChampionshipSolo;

    // @OneToMany(() => Player, (player) => player.match)
    // players: Player[];

    @CreateDateColumn({ type: 'timestamptz', name: 'created-at' })
    createdAt: Timestamp;

    @Column({ type: 'timestamptz', name: 'finished-at', nullable: true })
    finishedAt: Timestamp;
}
