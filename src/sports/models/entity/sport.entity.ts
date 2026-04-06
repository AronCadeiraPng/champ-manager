import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sport {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true, name: 'name'})
    name: string;

    @OneToMany(() => ChampionshipSolo, (championship) => championship.sport)
    championship: ChampionshipSolo
}
