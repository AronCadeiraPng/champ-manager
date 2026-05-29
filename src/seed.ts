import { NestFactory } from "@nestjs/core";
import { SeederModule } from "./_database/seeders/seeder.module";
import { Logger } from "@nestjs/common";
import { usersSeederData } from "./_database/seeders/entities/users/data";
import { Seeder } from "./_database/seeders/seeder";

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(SeederModule);

  const logger = new Logger("Seeder");

  try {
    const seeder = appContext.get(Seeder);

    await seeder.seed(usersSeederData, "46ba0c78-227e-4d67-925b-634724dc6f02");

    logger.debug("Seeding complete!");
  } catch (error) {
    logger.error("Seeding failed!", error);
    throw error;
  } finally {
    await appContext.close();
  }
}

bootstrap();