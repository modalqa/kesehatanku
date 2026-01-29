import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async list() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.usersService.findById(Number(id));
  }

  @Post()
  async create(@Body() body: any) {
    return this.usersService.create(body);
  }
}
