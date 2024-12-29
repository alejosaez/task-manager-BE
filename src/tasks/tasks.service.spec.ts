import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { getModelToken } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

const mockSave = jest.fn().mockResolvedValue({
  _id: '12345',
  title: 'First task2',
  description: 'This is a test task',
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

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a task', async () => {
    const createTaskDto: CreateTaskDto = {
      title: 'First task2',
      description: 'This is a test task',
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

  it('should delete a task', async () => {
    const id = '12345';
    jest.spyOn(service, 'deleteTask').mockResolvedValueOnce(undefined);

    await service.deleteTask(id);
    expect(service.deleteTask).toHaveBeenCalledWith(id);
  });
});
