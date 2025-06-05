import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreatePedidoDto } from '../../dto/CreatePedidoDto';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePedidoDto) {
    const { itens, entrega, ...pedidoData } = data;

    return this.prisma.pedido.create({
      data: {
        ...pedidoData,
        itensPedido: {
          create: itens.map(item => ({
            cafeId: item.cafeId,
            quantidade: item.quantidade,
            preco: item.preco,
          })),
        },
        entrega: {
          create: entrega,
        },
      },
      include: {
        itensPedido: true,
        entrega: true,
      },
    });
  }

  async findAll() {
    return this.prisma.pedido.findMany({
      include: {
        itensPedido: true,
        entrega: true,
        cliente: true,
      },
    });
  }

  
}
