import { Transform } from "class-transformer";
import { IsString, Length } from "class-validator";
import { GenderEnum } from "src/common/enums/gender-enum";
import { UserRoles } from "src/common/enums/user-roles.enum";
import { Registration } from "src/registrations/entities/registration.entity";
import { Team } from "src/teams/entities/team.entity";
import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn,
    Entity,
    Index,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    Timestamp,
    UpdateDateColumn 
} from "typeorm";

@Entity('users')
@Index(['email'])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 255})
    name: string;

    @Column({type: 'varchar', length: 255, unique: true})
    email: string;

    @Column({type: 'varchar', length: 55, unique: true})
    @IsString()
    @Transform(({ value }) => value.replace(/\D/g, ''))
    @Length(11, 11)
    cpf: string;
    
    @Column({type: 'varchar', length: 255})
    password: string;

    @ManyToOne(() => Team, (team) => team.users)
    team: Team;

    @Column({type: 'enum', enum: UserRoles, default: UserRoles.USER})
    role: UserRoles;

    @Column({ type: 'enum', enum: GenderEnum })
    gender: GenderEnum;

    @OneToMany(() => Registration, (registration) => registration.user)
    registrations?: Registration[]

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Timestamp;

    @DeleteDateColumn({ type: 'timestamptz' })
    deletedAt: Timestamp;
}
