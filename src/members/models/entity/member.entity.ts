import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Timestamp } from "typeorm";
import { User } from "../../../users/models/entity/user.entity";
import { Team } from "../../../teams/models/entity/team.entity";

@Entity('members')
export class Member {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', name: 'team-id' })
    teamId?: string;

    @Column({ type: 'varchar', name: 'user-id' })
    userId: string;

    @Column({ type: 'boolean', default: false })
    isLeader: boolean;

    @ManyToOne(() => User, (user) => user.team)
    @JoinColumn({ name: 'user-id' })
    user: User;

    @ManyToOne(() => Team, (team) => team.members)
    @JoinColumn({ name: 'team-id' })
    team?: Team;

    @CreateDateColumn({ name: 'created-at', type: 'timestamptz' })
    createdAt: Timestamp;
    
    @UpdateDateColumn({ name: 'updated-at', type: 'timestamptz' })
    updatedAt: Timestamp;
}