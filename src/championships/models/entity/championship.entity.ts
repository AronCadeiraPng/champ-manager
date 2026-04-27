
import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    OneToMany, 
    OneToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";
import { Timestamp } from "typeorm";
import { GenderEnum } from "../../../common/enums/gender.enum";
import { ModalityEnum } from "../../../common/enums/modality.enum";
import { StatusEnum } from "../../../common/enums/championship-status.enum";
import { Sport } from "../../../sports/models/entity/sport.entity";
import { RegistrationSolo } from "../../../registrations-solo/models/entity/registration.entity";
import { RegistrationTeam } from "src/registrations-team/models/entity/registration-team.entity";
import { Phase } from "src/phases/entity/phase.entity";


@Entity('championships')
export class Championship {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique:true, type: 'varchar', name: 'name' })
    name: string;


    @Column({ type: 'enum', enum: GenderEnum, name: 'gender' })
    gender: GenderEnum;

    @Column({ type: 'enum', enum: ModalityEnum, default: ModalityEnum.SOLO, name: 'modality'})
    modality: ModalityEnum;

    @Column({ type: 'timestamptz', default: new Date(), name: 'registration_start'})
    registrationStart: Date;
    
    @Column({ type: 'timestamptz' , name: 'registration_end' })
    registrationEnd: Date;

    @Column({ type: 'enum', enum: StatusEnum, name: 'status' })
    status: StatusEnum;
    
    @Column({ name: 'sport' })
    sportId?: string;

    @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
    updatedAt: Timestamp;

    @DeleteDateColumn({ type: 'timestamptz', name: 'deleted_at' })
    deletedAt: Timestamp;

    @ManyToOne(() => Sport)
    @JoinColumn({ name: 'sport' })
    sport: Sport;

    @OneToMany(() => RegistrationSolo, (registrations) => registrations.championship)
    registrationsSolo: RegistrationSolo[];

    @OneToMany(() => RegistrationTeam, (registrations) => registrations.championship)
    registrationsTeam: RegistrationTeam[];

    @OneToMany(() => Phase, (phase) => phase.championship)
    phases: Phase[];
}
