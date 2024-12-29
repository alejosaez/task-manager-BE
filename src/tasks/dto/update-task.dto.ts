import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({
    description: 'Title of the task',
    example: 'Updated Task Title',
    required: false,
  })
  title?: string;

  @ApiProperty({
    description: 'Description of the task',
    example: 'Updated description for the task',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Completion status of the task',
    example: true,
    required: false,
  })
  completed?: boolean;
}
