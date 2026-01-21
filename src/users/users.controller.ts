import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
// @UsePipes(ValidationPipe) // Se aplica a todos los métodos del controlador

@UsePipes(new ValidationPipe({  //Validación aplicada a todos los métodos del controlador.
          whitelist: true, //Rechaza campos no definidos en el DTO. Borra automáticamente cualquier campo que no exista en tu DTO.
          forbidNonWhitelisted: true, //Lanza un error si hay campos extra. Lanza un 400 Bad Request si llega un campo que no está en el DTO.
          transform: true //Convierte tipos automáticamente
      })) // Se aplica a todos los métodos del controlador


export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.usersService.findAll();

    // return {
    //   message: 'Mensaje personalizado',
    //   data: this.usersService.findAll(),
    // };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Put(':id')
  //@UsePipes(ValidationPipe)
  //@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  updatePut(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    console.log('PUT body:', updateUserDto);
    return this.usersService.updatePut(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(+id);
  }
}
