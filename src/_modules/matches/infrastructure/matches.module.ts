import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Championship } from "../../championships/models/entity/championship.entity";
import { ChampionshipFindService } from "../../championships/use-cases/find-championship/find-championship.service";
import { Group } from "../../groups/models/entity/group.entity";
import { GroupRepository } from "../../groups/repository/group.repository";
import { TypeOrmGroupRepository } from "../../groups/repository/typeorm-group.repository";
import { FindGroupByIdService } from "../../groups/use-cases/find-by-id/find-by-id.service";
import { Player } from "../../players/models/entity/player.entity";
import { PlayerCreateService } from "../../players/use-cases/create-player/create-player.service";
import { PlayerFindService } from "../../players/use-cases/find-player/find-player.service";
import { PlayerUpdateService } from "../../players/use-cases/update-player/update-player.service";
import { Match } from "../models/entity/match.entity";
import { MatchCreateService } from "../use-cases/create-match/create-match.service";
import { MatchFindService } from "../use-cases/find-match/find-match.service";
import { MatchGetWinnersService } from "../use-cases/get-winners/get-winners.service";
import { MatchPairService } from "../use-cases/pair-matches/pair-matches.service";
import { MatchSetWinnerService } from "../use-cases/set-winner/set-winner.service";
import { MatchShuffleService } from "../use-cases/shuffle-match/shuffle-match.service";
import { MatchUpdateService } from "../use-cases/update-match/update-match.service";
import { MatchesController } from "./matches.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Championship, Match, Player, Group])],
  controllers: [MatchesController],
  providers: [
    MatchCreateService,
    MatchShuffleService,
    MatchPairService,
    PlayerCreateService,
    PlayerUpdateService,
    PlayerFindService,
    MatchFindService,
    MatchFindService,
    MatchUpdateService,
    MatchSetWinnerService,
    MatchGetWinnersService,
    ChampionshipFindService,
    FindGroupByIdService,
    {
      provide: GroupRepository,
      useClass: TypeOrmGroupRepository
    }
  ],
  exports: [
    MatchCreateService,
    MatchShuffleService,
    MatchPairService,
    MatchFindService,
    MatchUpdateService,
    MatchSetWinnerService,
    MatchGetWinnersService,
  ],
})
export class MatchesModule {}
