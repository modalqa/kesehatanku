import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CheckinService } from './checkin.service';

@Controller('checkin')
export class CheckinController {
  constructor(private checkin: CheckinService) {}

  @Get('user/:id')
  async list(@Param('id') id: string) {
    return this.checkin.listForUser(Number(id));
  }

  @Post()
  async create(@Body() body: any) {
    return this.checkin.create(body);
  }
}
