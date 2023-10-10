// backend/src/services/birthday.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class BirthdayService {
  constructor(private readonly prisma: PrismaService) {}

  async getBirthdayData() {
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const birthdayData = await this.prisma.person.findMany({
      where: {
        dataNascimento: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
      groupBy: {
        dataNascimento: {
          count: true,
        },
      },
    });

    return birthdayData.map((data) => ({
      date: data.dataNascimento,
      count: data._count.dataNascimento,
    }));
  }
}
