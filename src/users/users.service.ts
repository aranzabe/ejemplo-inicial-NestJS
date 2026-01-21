import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  //Simulamos la bd. 
  private users : User[]= [
    {
      id: 1,
      name: 'Antonio',
      email: 'antonio@example.com',
      age: 30
    },
    {
      id: 2,
      name: 'Alberto',
      email: 'alberto@example.com',
      age: 25
    }
  ];

  private generateUniqueId = () => {
    let newId;
    do {
      newId = Math.floor(Math.random() * 1000) + 1;
    } while (this.users.some(user => user.id === newId)); 
    return newId;
  };

  
  create(createUserDto: CreateUserDto) {
      const user = new User();
      user.id = this.generateUniqueId();
      user.name = createUserDto.name;
      user.email = createUserDto.email;
      user.age = createUserDto.age;
      this.users.push(user);
      return user; 
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
        if (this.users.find(user => user.id === id) === undefined) {
      //return {msg: 'User not found'};
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  updatePut(id: number, updateUserDto: UpdateUserDto) {
      const userIndex = this.users.findIndex(user => user.id === id);

      if (userIndex === -1) {
        throw new NotFoundException(`Usuario con ID ${userIndex} no encontrado`);
      }

      const existingUser = this.users[userIndex];

      //Solo actualizamos las propiedades que vienen en updateUserDto
      //Actualizar solo los campos proporcionados en updateUserDto
      //Operador spread (...): Se mantiene el objeto original y solo se sobrescriben los valores proporcionados en updateUserDto, dejando los demás intactos.
      //Utiliza el operador spread (...) para fusionar el usuario existente con los nuevos datos 
      this.users[userIndex] = {
        ...existingUser,
        ...Object.fromEntries(
          Object.entries(updateUserDto).filter(([_, value]) => value !== undefined)
        ),
      };

      return this.users[userIndex];
  }

  remove(id: number) {
    const userIndex = this.users.findIndex(user => user.id === id);
    
      if (userIndex === -1) {
        //return { msg: 'User not found' };
        throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
      }

      const deletedUser = this.users.splice(userIndex, 1)[0];
      
      return { msg: 'User deleted successfully', deletedUser };
  }
}
