import { Module } from '@nestjs/common';
import { CoffeesModule } from './modules/coffees/coffees.module';
import { PrismaService } from './prisma.service';
import { ClientesModule } from './modules/clientes/clientes.module';
import { PedidosModule } from './modules/pedidos/pedidos.module';

@Module({
  imports: [CoffeesModule, ClientesModule, PedidosModule], 
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
