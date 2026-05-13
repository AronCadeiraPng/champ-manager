import { Championship } from '../../../championships/models/entity/championship.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Timestamp } from 'typeorm';

@Entity()
export class Sport {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar',unique: true, name: 'name'})
    name: string;

    @Column({ type: 'boolean', name: 'deleted', nullable: true })
    deleted?: boolean;

    @OneToMany(() => Championship, (championship) => championship.sport)
    championship: Championship;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Timestamp;
    
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
    updatedAt: Timestamp;
}
