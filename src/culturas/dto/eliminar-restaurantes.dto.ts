import { IsUUID } from 'class-validator';

export class EliminarPaisDto {
  @IsUUID()
  culturaId: string;

  @IsUUID()
  restauranteId: string;
}