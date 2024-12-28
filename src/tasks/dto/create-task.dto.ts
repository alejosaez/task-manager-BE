import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ description: 'Título de la tarea', example: 'Comprar pan' })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Descripción de la tarea',
    example: 'Ir a la panadería a las 9 AM',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Estado de la tarea (completada o no)',
    example: false,
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
