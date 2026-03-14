import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categorias.model';

@Controller('categorias')
export class CategoriasController {

  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  obtenerTodas() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  obtenerPorId(@Param('id') id: string) {
    return this.categoriasService.findOne(Number(id));
  }

  @Post()
  crear(@Body() categoria: Categoria) {
    return this.categoriasService.create(categoria);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() categoria: Categoria) {
    return this.categoriasService.update(Number(id), categoria);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.categoriasService.remove(Number(id));
  }

}