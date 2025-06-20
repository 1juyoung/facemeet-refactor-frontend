import { PrismaClient } from '@prisma/client';
import { GetUserDto } from '@/application/usecases/user/dto/GetUserDto';

export class PrUserRepository {
  private prisma: PrismaClient;

  constructor(prisma?: PrismaClient) {
    this.prisma = prisma || new PrismaClient();
  }

  async findById(id: number): Promise<GetUserDto | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(data: Omit<GetUserDto, 'id'>): Promise<GetUserDto> {
    return this.prisma.user.create({ data });
  }

  async update(id: number, data: Partial<GetUserDto>): Promise<GetUserDto> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: number): Promise<GetUserDto> {
    return this.prisma.user.delete({ where: { id } });
  }
}
