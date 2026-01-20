import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsInt, IsOptional, IsString, Min } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsOptional()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsInt()
    @Min(0) // Para evitar edades negativas
    age: number;

}
