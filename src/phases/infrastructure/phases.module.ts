import { Module } from '@nestjs/common';
import { PhasesController } from './phases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phase } from '../entity/phase.entity';
import { Championship } from 'src/championships/models/entity/championship.entity';
import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { RegistrationSoloFindService } from 'src/registrations-solo/use-cases/find-registration/find-registration.service';
import { Participant } from 'src/participant/models/entity/participant.entity';
import { ParticipantFindService } from 'src/participant/use-cases/find-participants/find-participants.service';
import { PhaseCreateService } from '../use-cases/create-phase/create-phase.service';
import { Match } from 'src/matches/models/entity/match.entity';
import { MatchCreateService } from 'src/matches/use-cases/create-match/create-match.service';
import { PlayerCreateService } from 'src/players/use-cases/create-player/create-player.service';
import { Player } from 'src/players/models/entity/player.entity';
import { MatchUpdateService } from 'src/matches/use-cases/update-match/update-match.service';
import { MatchFindService } from 'src/matches/use-cases/find-match/find-match.service';
import { MatchShuffleService } from 'src/matches/use-cases/shuffle-match/shuffle-match.service';
import { BuildGroupPhaseService } from '../use-cases/build-group-phase/build-group-phase.service';
import { PlayerUpdateService } from 'src/players/use-cases/update-player/update-player.service';
import { PlayerFindService } from 'src/players/use-cases/find-player/find-player.service';
import { MatchPairService } from 'src/matches/use-cases/pair-matches/pair-matches.service';

@Module({
  imports: [TypeOrmModule.forFeature([Phase, Championship, RegistrationSolo, Participant, Match, Player])],
  controllers: [PhasesController],
  providers: [
    PhaseCreateService,
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
    BuildGroupPhaseService
  ],
  exports: [
    PhaseCreateService,
    BuildGroupPhaseService
  ]
})
export class PhasesModule {}
