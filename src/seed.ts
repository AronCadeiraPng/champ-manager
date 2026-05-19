import { NestFactory } from "@nestjs/core";
import { SeederModule } from "./_database/seeders/seeder.module";
import { Logger } from "@nestjs/common";
import { usersSeederData } from "./_database/users/data";
import { Seeder } from "./_database/seeders/seeder";

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(SeederModule);

  const logger = new Logger("Seeder");

  try {
    const seeder = appContext.get(Seeder);

    await seeder.seed(usersSeederData);

    logger.debug("Seeding complete!");
  } catch (error) {
    logger.error("Seeding failed!", error);
    throw error;
  } finally {
    await appContext.close();
  }
}

bootstrap();