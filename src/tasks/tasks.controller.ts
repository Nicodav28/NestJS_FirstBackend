import { Body, Param, Controller, Delete, Get, Post, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service'; 
import { Priority, Task } from './tasks.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

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

  @Delete('delete/:id')
  deleteTask(@Param('id') id: string): object {
    return this.taskService.deleteTask(id);
  }

  @Get(':id')
  getTask(@Param('id') id: string): Task{
    return this.taskService.getTask(id);
  }

  @Patch('update/:id')
  updateTask(@Param('id') id: string, @Body() newTask: UpdateTaskDto){
    return this.taskService.updateTask(id, newTask);
  }
  
}
