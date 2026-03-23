import { Transform } from "class-transformer";
import { IsString, Length } from "class-validator";
import { UserRoles } from "src/common/enums/user-roles.enum";
import { Registration } from "src/registrations/entities/registration.entity";
import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn,
    Entity,
    Index,
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

    @Column({type: 'enum', enum: UserRoles, default: UserRoles.USER})
    role: UserRoles;

    @OneToMany(() => Registration, (registration) => registration.user)
    registrations?: Registration[]

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Timestamp;

    @DeleteDateColumn({ type: 'timestamptz' })
    deletedAt: Timestamp;
}
