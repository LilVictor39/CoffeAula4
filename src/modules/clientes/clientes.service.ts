import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateClienteDto } from '../../dto/CreateClienteDto';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateClienteDto) {
    return this.prisma.cliente.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.cliente.findMany();
  }

  async findById(id: number) {
    return this.prisma.cliente.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Partial<CreateClienteDto>) {
    return this.prisma.cliente.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.cliente.delete({
      where: { id },
    });
  }
}
