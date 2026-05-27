import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { User } from "../models/entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TypeOrmUserRepository implements UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ) { }

    async save(user: User): Promise<User> {
        return await this.repository.save(user);
    }
    
    async createAndSave(userDto: Partial<User>): Promise<User> {
        return await this.repository.save(userDto);
    }

    async findAll(): Promise<User[]> {
        return await this.repository.find({
            select: ['id', 'gender', 'name', 'email', 'createdAt', 'role']
        })
    }

    async findById(id: string) {
        return await this.repository.findOne({
            where: { id },
            select: ['id', 'gender', 'name', 'email', 'createdAt', 'role']
        });
    }

    async findByEmail(email: string) {
        return await this.repository.findOne({
            where: { email: email },
            select: ['id', 'password', 'gender', 'name', 'email', 'createdAt', 'role']
        });
    }

    async findByCpf(cpf: string) {
        return await this.repository.findOne({
            where: { cpf: cpf },
            select: ['id', 'gender', 'name', 'email', 'createdAt', 'role']
        })
    }
}