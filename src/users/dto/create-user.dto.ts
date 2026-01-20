import { IsEmail, IsInt, IsString, Min } from "class-validator";

export class CreateUserDto {

// @IsInt()
  // id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(0) // Para evitar edades negativas
  age: number;

  

}
