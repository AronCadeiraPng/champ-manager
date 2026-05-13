import { Transform } from "class-transformer";
import { IsString, Length } from "class-validator";
import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn,
    Entity,
    Index,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    Timestamp,
    UpdateDateColumn 
} from "typeorm";
import { UserRolesEnum } from "../../../common/enums/user-roles.enum";
import { GenderEnum } from "../../../common/enums/gender.enum";
import { RegistrationSolo } from "../../../registrations-solo/models/entity/registration.entity";
import { Team } from "../../../teams/models/entity/team.entity";

@Entity('users')
@Index(['email'])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 55, unique: true })
    @IsString()
    @Transform(({ value }) => value.replace(/\D/g, ''))
    @Length(11, 11)
    cpf: string;
    
    @Column({ type: 'varchar', length: 255})
    password: string;

    @Column({ name: 'team_id', nullable: true })
    teamId: string;

    @Column({ type: 'enum', enum: UserRolesEnum, default: UserRolesEnum.USER })
    role: UserRolesEnum;

    @Column({ type: 'enum', enum: GenderEnum, nullable: true, default: GenderEnum.MASCULINE })
    gender?: GenderEnum;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Timestamp;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
    updatedAt: Timestamp;

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz' })
    deletedAt: Timestamp;

    @OneToMany(() => RegistrationSolo, (registration) => registration.user)
    @JoinColumn({ name: 'registrations' })
    registrationsSolo?: RegistrationSolo;

    @OneToMany(() => Team, (team) => team.members, { nullable: true })
    team?: Team;
}
