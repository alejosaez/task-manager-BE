import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { getModelToken } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

const mockSave = jest.fn().mockResolvedValue({
  _id: '12345',
  title: 'Primera tarea2',
  description: 'Esta es una tarea de prueba',
  createdAt: new Date('2024-12-28T20:37:01.841Z'),
});

const MockTaskModel = jest.fn().mockImplementation((data) => ({
  ...data,
  save: mockSave,
}));

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getModelToken(Task.name),
          useValue: MockTaskModel,
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  it('debería crear una tarea', async () => {
    const createTaskDto: CreateTaskDto = {
      title: 'Primera tarea2',
      description: 'Esta es una tarea de prueba',
    };

    const expectedTask = {
      ...createTaskDto,
      _id: '12345',
      createdAt: new Date('2024-12-28T20:37:01.841Z'),
    };

    const result = await service.createTask(createTaskDto);

    expect(result).toEqual(expectedTask);
    expect(MockTaskModel).toHaveBeenCalledTimes(1);
    expect(MockTaskModel).toHaveBeenCalledWith(createTaskDto);
    expect(mockSave).toHaveBeenCalledTimes(1);
  });
});
