import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Member } from '../../../members/models/entity/member.entity';
import { RegistrationTeam } from '../../../registrations-team/models/entity/registration-team.entity';

@Entity('teams')
export class Team {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', name: 'name', nullable: true })
    name?: string;

    @OneToMany(() => Member, (member) => member.team, { nullable: true, onDelete: 'CASCADE' })
    members?: Member[];

    @OneToMany(() => RegistrationTeam, (registration) => registration.team)
    registration: RegistrationTeam[];

    @CreateDateColumn({ name: 'created_at', type: 'date' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'date' })
    updatedAt: Date;
}
