import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Timestamp } from "typeorm";
import { User } from "../../../users/models/entity/user.entity";
import { Team } from "../../../teams/models/entity/team.entity";

@Entity('members')
export class Member {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', name: 'team_id', nullable: true })
    teamId?: string;

    @Column({ type: 'varchar', name: 'user_id', nullable: true})
    userId?: string; 

    @ManyToOne(() => User, (user) => user.team , { nullable: true })
    @JoinColumn({ name: 'user_id' })
    user?: User;

    @ManyToOne(() => Team, (team) => team.members, { nullable: true })
    @JoinColumn({ name: 'team_id' })
    team?: Team;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Timestamp;
    
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
    updatedAt: Timestamp;
}