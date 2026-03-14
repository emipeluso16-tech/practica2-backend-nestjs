import { Injectable } from '@nestjs/common';
import { Categoria } from './categorias.model';

@Injectable()
export class CategoriasService {
  private categorias: Categoria[] = [];

  findAll(): Categoria[] {
    return this.categorias;
  }

  findOne(id: number): Categoria | undefined {
    return this.categorias.find(cat => cat.id === id);
  }

  create(categoria: Categoria) {
    this.categorias.push(categoria);
    return categoria;
  }

  update(id: number, categoria: Categoria) {
    const index = this.categorias.findIndex(cat => cat.id === id);
    if (index !== -1) {
      this.categorias[index] = categoria;
      return categoria;
    }
    return null;
  }

  remove(id: number) {
    this.categorias = this.categorias.filter(cat => cat.id !== id);
    return { deleted: true };
  }
}
