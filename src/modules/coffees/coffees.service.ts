import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CoffeeDto } from 'src/dto/CreateCoffeeDto.ts';

@Injectable()
export class CoffeesService {
  private readonly coffees: CoffeeDto[] = [
    {
      id: 1,
      nome: 'Mata sono',
      tipo: 'Forte',
      quantidade: 10,
      preco: 10,
      descricao: 'Café de qualidade',
      tags: ['tradicional'],
    },
    {
      id: 2,
      nome: 'Jalapão',
      tipo: 'Forte',
      quantidade: 10,
      preco: 10,
      descricao: 'Café de qualidade',
      tags: ['tradicional', 'vegano'],
    },
    {
      id: 3,
      nome: '3 Corações',
      tipo: 'Forte',
      quantidade: 10,
      preco: 10,
      descricao: 'Café de qualidade',
      tags: ['tradicional', 'Extra forte'],
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getCoffees(): CoffeeDto[] {
    return this.coffees;
  }

  getCoffeeById(id: number): CoffeeDto | undefined {
    const coffee = this.coffees.find((coffee) => coffee.id === id);

    if (!coffee) {
      throw new NotFoundException(`Café com id '${id}' não encontrado.`);
    }

    return coffee;
  }

  postCoffee(coffee: CoffeeDto) {
    const coffeeExists = this.coffees.find((c) => c.id === coffee.id);

    if (coffeeExists) {
      throw new BadRequestException('Dados inválidos ou ID já existente.');
    }

    this.coffees.push(coffee);

    return coffee;
  }
}
