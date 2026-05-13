import { Module } from '@nestjs/common';
import { PhasesController } from './phases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phase } from '../entity/phase.entity';
import { Championship } from '../../championships/models/entity/championship.entity';
import { ChampionshipFindService } from '../../championships/use-cases/find-championship/find-championship.service';
import { RegistrationSolo } from '../../registrations-solo/models/entity/registration.entity';
import { RegistrationSoloFindService } from '../../registrations-solo/use-cases/find-registration/find-registration.service';
import { Participant } from '../../participant/models/entity/participant.entity';
import { ParticipantFindService } from '../../participant/use-cases/find-participants/find-participants.service';
import { PhaseCreateService } from '../use-cases/create-phase/create-phase.service';
import { Match } from '../../matches/models/entity/match.entity';
import { MatchCreateService } from '../../matches/use-cases/create-match/create-match.service';
import { PlayerCreateService } from '../../players/use-cases/create-player/create-player.service';
import { Player } from '../../players/models/entity/player.entity';
import { MatchUpdateService } from '../../matches/use-cases/update-match/update-match.service';
import { MatchFindService } from '../../matches/use-cases/find-match/find-match.service';
import { MatchShuffleService } from '../../matches/use-cases/shuffle-match/shuffle-match.service';
import { BuildGroupPhaseService } from '../use-cases/build-group-phase/build-group-phase.service';
import { PlayerUpdateService } from '../../players/use-cases/update-player/update-player.service';
import { PlayerFindService } from '../../players/use-cases/find-player/find-player.service';
import { MatchPairService } from '../../matches/use-cases/pair-matches/pair-matches.service';
import { PhaseFindService } from '../use-cases/find-phase/find-phase.service';
import { MatchGetWinnersService } from '../../matches/use-cases/get-winners/get-winners.service';
import { PhaseBuildOctaveService } from '../use-cases/build-octave-phase/build-octave-phase.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Phase,
      Championship,
      RegistrationSolo,
      Participant,
      Match,
      Player,
    ]),
  ],
  controllers: [PhasesController],
  providers: [
    PhaseCreateService,
    PhaseBuildOctaveService,
    PhaseFindService,
    ChampionshipFindService,
    RegistrationSoloFindService,
    ParticipantFindService,
    MatchCreateService,
    MatchUpdateService,
    MatchFindService,
    ParticipantFindService,
    PlayerCreateService,
    PlayerUpdateService,
    PlayerFindService,
    MatchPairService,
    MatchShuffleService,
    MatchGetWinnersService,
    BuildGroupPhaseService,
  ],
  exports: [PhaseCreateService, PhaseFindService, BuildGroupPhaseService],
})
export class PhasesModule {}
