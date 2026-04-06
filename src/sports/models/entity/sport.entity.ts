import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sport {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar',unique: true, name: 'name'})
    name: string;

    @Column({ type: 'boolean', name: 'deleted', nullable: true })
    deleted?: boolean;

    @OneToMany(() => ChampionshipSolo, (championship) => championship.sport)
    championship: ChampionshipSolo
}
