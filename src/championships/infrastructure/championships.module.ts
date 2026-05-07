import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Championship } from '../models/entity/championship.entity';
import { ChampionshipsController } from './championships.controller';
import { ChampionshipDeleteService } from '../use-cases/delete-championship/delete-championship-solo.service';
import { ChampionshipFindService } from '../use-cases/find-championship/find-championship.service';
import { ChampionshipUpdateService } from '../use-cases/update-championship/update-championship.service';
import { ChampionshipStartService } from '../use-cases/start-championship/start-championship.service';
import { ChampionshipCreateService } from '../use-cases/create-championship/create-championship.service';
import { ChampionshipFindRegistrationsService } from '../use-cases/find-registrations/find-registrations.service';
import { ParticipantCreateService } from '../../participant/use-cases/create-participant/create-participant.service';
import { RegistrationTeamFindService } from '../../registrations-team/use-cases/find-registration/find-registration.service';
import { RegistrationTeam } from '../../registrations-team/models/entity/registration-team.entity';
import { Participant } from '../../participant/models/entity/participant.entity';
import { RegistrationSolo } from '../../registrations-solo/models/entity/registration.entity';
import { Sport } from '../../sports/models/entity/sport.entity';
import { RegistrationSoloFindService } from '../../registrations-solo/use-cases/find-registration/find-registration.service';
import { SportFindService } from '../../sports/use-cases/find-sport/find-sport.service';
import { Phase } from 'src/phases/entity/phase.entity';
import { BuildGroupPhaseService } from 'src/phases/use-cases/build-group-phase/build-group-phase.service';
import { StartGroupPhaseService } from '../use-cases/start-group-phase/start-group-phase.service';
import { ParticipantFindService } from 'src/participant/use-cases/find-participants/find-participants.service';
import { MatchPairService } from 'src/matches/use-cases/pair-matches/pair-matches.service';
import { Match } from 'src/matches/models/entity/match.entity';
import { MatchShuffleService } from 'src/matches/use-cases/shuffle-match/shuffle-match.service';
import { MatchCreateService } from 'src/matches/use-cases/create-match/create-match.service';
import { MatchUpdateService } from 'src/matches/use-cases/update-match/update-match.service';
import { PlayerCreateService } from 'src/players/use-cases/create-player/create-player.service';
import { MatchFindService } from 'src/matches/use-cases/find-match/find-match.service';
import { Player } from 'src/players/models/entity/player.entity';
import { PlayerUpdateService } from 'src/players/use-cases/update-player/update-player.service';
import { PlayerFindService } from 'src/players/use-cases/find-player/find-player.service';
import { PhaseFindService } from 'src/phases/use-cases/find-phase/find-phase.service';

@Module({
  imports: [TypeOrmModule.forFeature([Championship, RegistrationSolo, RegistrationTeam, Match, Player, Sport, Participant, Phase]) ],
  controllers: [ChampionshipsController],
  providers: [
    Championship,
    ChampionshipCreateService,
    ChampionshipDeleteService,
    ChampionshipFindService,
    ChampionshipUpdateService,
    ChampionshipStartService,
    RegistrationSoloFindService,
    SportFindService,
    ParticipantCreateService,
    RegistrationTeamFindService,
    ChampionshipFindRegistrationsService,
    BuildGroupPhaseService,
    StartGroupPhaseService,
    ParticipantFindService,
    MatchPairService,
    MatchShuffleService,
    MatchCreateService,
    MatchUpdateService, 
    PlayerCreateService,
    MatchFindService,
    PlayerUpdateService,
    PlayerFindService,
    PhaseFindService
  ],
  exports: [    
    ChampionshipDeleteService,
    ChampionshipFindService,
    ChampionshipUpdateService,
    ChampionshipStartService
  ]
})
export class ChampionshipModule {}
