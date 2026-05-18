import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { ChampionshipStatusEnum } from '../../../_common/enums/championship-status.enum';
import { GenderEnum } from '../../../_common/enums/gender.enum';
import { ModalityEnum } from '../../../_common/enums/modality.enum';
import { Group } from '../../../groups/models/entity/group.entity';
import { RegistrationSolo } from '../../../registrations-solo/models/entity/registration.entity';
import { RegistrationTeam } from '../../../registrations-team/models/entity/registration-team.entity';
import { Sport } from '../../../sports/models/entity/sport.entity';

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

    @Column({ type: 'enum', enum: ChampionshipStatusEnum, name: 'status', default: ChampionshipStatusEnum.REGISTRATION_START })
    status: ChampionshipStatusEnum;
    
    @Column({ name: 'sport' })
    sportId?: string;

    @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', name: 'deleted_at' })
    deletedAt: Date;

    @ManyToOne(() => Sport)
    @JoinColumn({ name: 'sport' })
    sport: Sport;

    @OneToMany(() => RegistrationSolo, (registrations) => registrations.championship)
    registrationsSolo: RegistrationSolo[];

    @OneToMany(() => RegistrationTeam, (registrations) => registrations.championship)
    registrationsTeam: RegistrationTeam[];

    @OneToMany(() => Group, (group) => group.championship)
    groups: Group[];
}
