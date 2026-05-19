import { Injectable } from "@nestjs/common";
import { RegistrationSolo } from "../../../../registrations-solo/models/entity/registration.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRegistrationSoloDto } from "../../../../registrations-solo/models/dtos/create-registration.dto";
import { User } from "../../../../users/models/entity/user.entity";

@Injectable()
export class SeedRegistrationService {
constructor(
    @InjectRepository(RegistrationSolo) private readonly userRepository: Repository<RegistrationSolo>
) {}

    async execute(usersArrayDto: User[], championshipId: string): Promise<RegistrationSolo[]> {
        const registrations = await Promise.all(
            usersArrayDto.map(async (user) => {
                const registration: CreateRegistrationSoloDto = {
                    userId: user.id,
                    championshipId: championshipId
                }

                return await this.userRepository.save(registration);
            })
        )
        return registrations;
    }
}