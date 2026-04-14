import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { RegistrationTeam } from "src/registrations-team/models/entity/registration-team.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('participants')
export class Participant {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'user-id' })
    userId: string;

    @Column({ name: 'registration-solo-id' })
    registrationSoloId: string;

    @Column({ name: 'registration-team-id' })
    registrationTeamId: string;

    @OneToOne(() => RegistrationSolo, { nullable: true })
    @JoinColumn({ name: 'registration-solo-id' })
    registrationSolo?: RegistrationSolo;

    @OneToOne(() => RegistrationTeam, { nullable: true })
    @JoinColumn({ name: 'registration-team-id' })
    registrationTeam?: RegistrationTeam;
}
