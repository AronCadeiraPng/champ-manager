import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Phase } from "src/phases/entity/phase.entity";
import { Player } from "src/players/models/entity/player.entity";

@Entity('matches')
export class Match {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', name: 'winner_id', nullable: true})
    winnerId?: string;

    @Column({type: 'varchar', name: 'phase_id' })
    phaseId: string;

    @OneToMany(() => Player, (player) => player.match, { nullable: true })
    players?: Player[];

    @ManyToOne(() => Phase, (phase) => phase.matches, { nullable: true })
    @JoinColumn({ name: 'phase_id' })
    phase?: Phase;

    @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
    updatedAt: Timestamp;
}
