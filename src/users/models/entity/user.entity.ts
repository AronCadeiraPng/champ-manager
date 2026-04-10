import { Transform } from "class-transformer";
import { IsString, Length } from "class-validator";
import { GenderEnum } from "src/common/enums/gender.enum";
import { UserRoles } from "src/common/enums/user-roles.enum";
import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn,
    Entity,
    Index,
    JoinColumn,
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

    @Column({ type: 'enum', enum: UserRoles, default: UserRoles.USER })
    role: UserRoles;

    @Column({ type: 'enum', enum: GenderEnum })
    gender: GenderEnum;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Timestamp;

    @DeleteDateColumn({ type: 'timestamptz' })
    deletedAt: Timestamp;

    @OneToMany(() => RegistrationSolo, (registration) => registration.user)
    @JoinColumn({ name: 'registrations' })
    registrationsSolo: RegistrationSolo
}
