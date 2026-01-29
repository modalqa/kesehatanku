import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async list() {
    return this.prisma.report.findMany({ include: { author: true } });
  }

  async create(data: any) {
    return this.prisma.report.create({ data });
  }
}
