import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private reports: ReportsService) {}

  @Get()
  async list() {
    return this.reports.list();
  }

  @Post()
  async create(@Body() body: any) {
    return this.reports.create(body);
  }
}
