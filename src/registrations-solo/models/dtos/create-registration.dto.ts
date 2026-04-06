import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateRegistrationSoloDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsUUID()
  @IsNotEmpty()
  championshipId: string;
}