import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Title of the task',
    example: 'Buy bread',
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Description of the task',
    example: 'Go to the bakery at 9 AM',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Completion status of the task',
    example: false,
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
