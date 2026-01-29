import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private payments: PaymentsService) {}

  @Get('user/:id')
  async list(@Param('id') id: string) {
    return this.payments.listForUser(Number(id));
  }

  @Post()
  async create(@Body() body: any) {
    return this.payments.create(body);
  }
}
