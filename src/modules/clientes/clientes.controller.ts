import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from '../../dto/CreateClienteDto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() dto: CreateClienteDto) {
    return this.clientesService.create(dto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }
}
