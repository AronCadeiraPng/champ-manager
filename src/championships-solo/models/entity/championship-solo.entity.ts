import { GenderEnum } from "src/common/enums/gender-enum";
import { ModalityEnum } from "src/common/enums/modality-enum";
import { StatusEnum } from "src/common/enums/status.enum";
import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { Sport } from "src/sports/models/entity/sport.entity";
import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    JoinColumn, 
    OneToMany, 
    OneToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";
import { Timestamp } from "typeorm";

@Entity('championships-solo')
export class ChampionshipSolo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique:true, type: 'varchar', name: 'name' })
    name: string;


    @Column({ type: 'enum', enum: GenderEnum, name: 'gender' })
    gender: GenderEnum;

    @Column({ type: 'enum', enum: ModalityEnum, default: ModalityEnum.SOLO, name: 'modality'})
    modality: ModalityEnum;

    @Column({ type: 'timestamptz', default: new Date(), name: 'registration-start'})
    registrationStart: Date;
    
    @Column({ type: 'timestamptz' , name: 'registration-end' })
    registrationEnd: Date;

    @Column({ type: 'enum', enum: StatusEnum, name: 'status' })
    status: StatusEnum;
    
    @Column({ name: 'sport' })
    sportId?: string;

    @CreateDateColumn({ type: 'timestamptz', name: 'created-at' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updated-at' })
    updatedAt: Timestamp;

    @DeleteDateColumn({ type: 'timestamptz', name: 'deleted-at' })
    deletedAt: Timestamp;

    @OneToOne(() => Sport)
    @JoinColumn({ name: 'sport' })
    sport: Sport;

    @OneToOne(() => RegistrationSolo)
    registration: RegistrationSolo
}
