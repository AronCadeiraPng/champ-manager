import { SportsEnum } from "src/common/enums/championship-esports.enum";
import { GenderEnum } from "src/common/enums/gender-enum";
import { ModalityEnum } from "src/common/enums/modality-enum";
import { StatusEnum } from "src/common/enums/status.enum";
import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";
import { Timestamp } from "typeorm";

@Entity('championships')
export class Championship {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique:true, type: 'varchar'})
    name: string;

    @Column({ type: 'enum', enum: SportsEnum})
    sport: SportsEnum;

    @Column({ type: 'enum', enum: GenderEnum })
    gender: GenderEnum;

    @Column({ type: 'enum', enum: ModalityEnum })
    modality: ModalityEnum;

    @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.INPROGRESS})
    status: StatusEnum;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Timestamp;

    @DeleteDateColumn({ type: 'timestamptz' })
    deletedAt: Timestamp;
}
