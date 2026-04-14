
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
import { GenderEnum } from "../../../common/enums/gender.enum";
import { ModalityEnum } from "../../../common/enums/modality.enum";
import { StatusEnum } from "../../../common/enums/championship-status.enum";
import { Player } from "../../../players/models/entity/player.entity";
import { Sport } from "../../../sports/models/entity/sport.entity";
import { RegistrationSolo } from "../../../registrations-solo/models/entity/registration.entity";


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

    @OneToMany(() => Player, (player) => player.championship)
    players: Player[]; 

    // @OneToMany(() => Match, (match) => match.championship)
    // matches: Match;

    @OneToOne(() => Sport)
    @JoinColumn({ name: 'sport' })
    sport: Sport;

    @OneToMany(() => RegistrationSolo, (registrations) => registrations.championship)
    registrations: RegistrationSolo[];
}
