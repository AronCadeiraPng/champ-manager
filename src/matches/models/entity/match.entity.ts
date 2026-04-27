import { Championship } from "src/championships/models/entity/championship.entity";
import { Phase } from "src/phases/entity/phase.entity";
import { Player } from "src/players/models/entity/player.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('matches')
export class Match {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', name: 'winner_id', nullable: true})
    winnerId?: string;

    @OneToMany(() => Player, (player) => player.match)
    players: Player[];

    @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
    updatedAt: Timestamp;

    @ManyToOne(() => Phase, (phase) => phase.matches)
    phase: Phase;
}
