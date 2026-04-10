import { Controller, Post, Body } from '@nestjs/common';
import { CreateMatchDto } from '../models/dtos/create-match.dto';
import { MatchCreateService } from '../use-cases/create-match.service';

@Controller('match')
export class MatchController {
  constructor(private readonly matchCreateService: MatchCreateService) {}

  @Post()
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchCreateService.create(createMatchDto);
  }
}
