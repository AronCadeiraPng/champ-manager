import { Match } from "src/matches/models/entity/match.entity";
import { Participant } from "src/participant/models/entity/participant.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('players')
export class Player {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'integer', name: 'points', default: 0, nullable: true })
    points?: number;

    @Column({name: 'match_id', nullable: true})
    matchId: string;

    @Column({ type: 'varchar', name: 'participant_id' })
    participantId: string;

    @ManyToOne(() => Participant, (participant) => participant.player, { nullable:true })
    @JoinColumn({ name: 'participant_id' })
    participant?: Participant;

    @ManyToOne(() => Match, (match) => match.players, { nullable: true })
    @JoinColumn({ name: 'match_id' })
    match?: Match;
}
