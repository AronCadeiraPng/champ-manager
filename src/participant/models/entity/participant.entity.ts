import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { RegistrationTeam } from "src/registrations-team/models/entity/registration-team.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('participants')
export class Participant {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'registration-user-id', nullable: true })
    registrationUserId?: string;

    @Column({ name: 'registration-team-id', nullable: true })
    registrationTeamId?: string;

    @Column({ name: 'points', type: 'integer', nullable: true })
    points?: number;

    @OneToOne(() => RegistrationSolo, { nullable: true })
    @JoinColumn({ name: 'registration-user-id' })
    registrationSolo?: RegistrationSolo;

    @OneToOne(() => RegistrationTeam, { nullable: true })
    @JoinColumn({ name: 'registration-team-id' })
    registrationTeam?: RegistrationTeam;
}
