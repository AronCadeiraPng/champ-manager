import { User } from "../models/entity/user.entity";

export abstract class UserRepository {
  abstract save(user: User): Promise<User>;
  abstract createAndSave(userDto: Partial<User>): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findById(id: string): Promise<User | null>;
  abstract findByCpf(cpf: string): Promise<User | null>;
}