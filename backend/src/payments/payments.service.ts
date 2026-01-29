import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async listForUser(userId: number) {
    return this.prisma.payment.findMany({ where: { userId } });
  }

  async create(data: any) {
    return this.prisma.payment.create({ data });
  }
}
