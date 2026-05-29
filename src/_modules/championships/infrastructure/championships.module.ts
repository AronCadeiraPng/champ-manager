import { Module } from "@nestjs/common";
import { MatchCreateService } from "../../matches/use-cases/create-match/create-match.service";
import { MatchPairService } from "../../matches/use-cases/pair-matches/pair-matches.service";
import { MatchShuffleService } from "../../matches/use-cases/shuffle-match/shuffle-match.service";
import { MatchUpdateService } from "../../matches/use-cases/update-match/update-match.service";
import { PlayerCreateService } from "../../players/use-cases/create-player/create-player.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import { Group } from "../../groups/models/entity/group.entity";
import { GroupRepository } from "../../groups/repository/group.repository";
import { TypeOrmGroupRepository } from "../../groups/repository/typeorm-group.repository";
import { FindGroupByPhaseService } from "../../groups/use-cases/find-by-phase/find-group.service";
import { UpdateGroupService } from "../../groups/use-cases/update/update.service";
import { Match } from "../../matches/models/entity/match.entity";
import { MatchFindService } from "../../matches/use-cases/find-match/find-match.service";
import { Participant } from "../../participant/models/entity/participant.entity";
import { ParticipantCreateService } from "../../participant/use-cases/create-participant/create-participant.service";
import { ParticipantFindService } from "../../participant/use-cases/find-participants/find-participants.service";
import { Player } from "../../players/models/entity/player.entity";
import { PlayerFindService } from "../../players/use-cases/find-player/find-player.service";
import { PlayerUpdateService } from "../../players/use-cases/update-player/update-player.service";
import { RegistrationSolo } from "../../registrations-solo/models/entity/registration.entity";
import { RegistrationSoloFindService } from "../../registrations-solo/use-cases/find-registration/find-registration.service";
import { RegistrationTeam } from "../../registrations-team/models/entity/registration-team.entity";
import { RegistrationTeamFindService } from "../../registrations-team/use-cases/find-registration/find-registration.service";
import { Sport } from "../../sports/models/entity/sport.entity";
import { SportFindService } from "../../sports/use-cases/find-sport/find-sport.service";
import { Championship } from "../models/entity/championship.entity";
import { ChampionshipCreateService } from "../use-cases/create-championship/create-championship.service";
import { ChampionshipDeleteService } from "../use-cases/delete-championship/delete-championship-solo.service";
import { ChampionshipFindService } from "../use-cases/find-championship/find-championship.service";
import { ChampionshipFindRegistrationsService } from "../use-cases/find-registrations/find-registrations.service";
import { ChampionshipStartService } from "../use-cases/start-championship/start-championship.service";
import { StartGroupPhaseService } from "../use-cases/start-group-phase/start-group-phase.service";
import { ChampionshipUpdateService } from "../use-cases/update-championship/update-championship.service";
import { ChampionshipsController } from "./championships.controller";
import { FindGroupByIdService } from "../../groups/use-cases/find-by-id/find-by-id.service";
import { CreateGroupService } from "../../groups/use-cases/create/create.service";


@Module({
  imports: [TypeOrmModule.forFeature([Championship, RegistrationSolo, RegistrationTeam, Match, Player, Sport, Participant, Group]) ],
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
    StartGroupPhaseService,
    ParticipantFindService,
    MatchPairService,
    MatchShuffleService,
    MatchCreateService,
    MatchUpdateService, 
    PlayerCreateService,
    MatchFindService,
    CreateGroupService,
    FindGroupByPhaseService,
    FindGroupByIdService,
    PlayerUpdateService,
    PlayerFindService,
    UpdateGroupService,
    JwtService,
        {
          provide: GroupRepository,
          useClass: TypeOrmGroupRepository,
        },
  ],
  exports: [    
    ChampionshipDeleteService,
    ChampionshipFindService,
    ChampionshipUpdateService,
    ChampionshipStartService
  ]
})
export class ChampionshipModule {}
