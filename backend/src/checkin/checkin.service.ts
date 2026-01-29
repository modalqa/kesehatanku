import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CheckinService {
  constructor(private prisma: PrismaService) {}

  async listForUser(userId: number) {
    return this.prisma.checkIn.findMany({ where: { userId } });
  }

  async create(data: any) {
    return this.prisma.checkIn.create({ data });
  }
}
