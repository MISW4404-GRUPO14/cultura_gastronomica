import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateProductoDto {    
   
    @IsString({message: 'El campo nombre debe ser un string' })
    @MinLength(1,{message: 'El campo nombre no debe estar vacío'}) 
    nombre: string;

    @IsString({message: 'El campo descripcion debe ser un string' })
    @MinLength(1,{message: 'El campo descripcion no debe estar vacío'}) 
    descripcion: string;

    @IsString({message: 'El campo historia debe ser un string' })
    @MinLength(1,{message: 'El campo historia no debe estar vacío'}) 
    historia: string;

    @IsUUID()
    @IsOptional()
    idCategoria: string;
}