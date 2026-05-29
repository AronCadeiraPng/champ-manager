import { Match } from '../../../matches/models/entity/match.entity';
import { Participant } from '../../../participant/models/entity/participant.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('players')
export class Player {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'integer', name: 'poi', default: 0})
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
