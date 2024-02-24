import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service'; 
import { Priority, Task } from './tasks.entity';
import { CreateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

  constructor(private taskService: TasksService){

  }

  @Get()
  getAllTasks(): Array<Task> {
    return this.taskService.getAllTasks();
  }

  @Post('create')
  createTask(@Body() newTask: CreateTaskDto): Task {
    const {title, description, priority} = newTask;

    return this.taskService.createTask(title, description, priority);
  }
  
}
