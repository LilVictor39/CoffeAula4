import {
  IsNotEmpty,
  IsNumber,
  IsArray,
  ValidateNested,
  IsObject,
  IsString,
  IsDateString
} from 'class-validator';
import { Type } from 'class-transformer';

class CreateItemDto {
  @IsNumber()
  cafeId: number;

  @IsNumber()
  quantidade: number;

  @IsNumber()
  preco: number;
}

class CreateEntregaDto {
  @IsString()
  enderecoEntrega: string;

  @IsString()
  status: string;

  @IsDateString()
  dataPrevista: string; // ou Date, se quiser
}

export class CreatePedidoDto {
  @IsNumber()
  clienteId: number;

  @IsNumber()
  total: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateItemDto)
  itens: CreateItemDto[];

  @IsObject()
  @ValidateNested()
  @Type(() => CreateEntregaDto)
  entrega: CreateEntregaDto;
}
