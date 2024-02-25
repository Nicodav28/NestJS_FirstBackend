import { Injectable } from '@nestjs/common';
import { Task, TaskStatus, Priority } from './tasks.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {

    private tasks: Array<Task> = [{
        id: "1",
        title: 'Task 1',
        description: 'Description 1',
        status: TaskStatus.PENDING,
        priority: Priority.HIGH,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
    }];

    getAllTasks(): Array<Task>{
        return this.tasks;
    }

    createTask(title: string, description: string, priority: Priority): Task{
        const tasks: Task = {
            id: v4(),
            title: title,
            description: description,
            status: TaskStatus.PENDING,
            priority: priority,
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: null,
        };

        this.tasks.push(tasks);

        return tasks;
    }

    deleteTask(taskId: string){
        this.tasks = this.tasks.filter(task => task.id !== taskId);

        return {
            error: false,
            message: 'Task deleted successfully'
        };
    }

    getTask(taskId: string): Task{
        return this.tasks.find(task => task.id === taskId);
    }

    updateTask(taskId: string, updatedFields: any){
        const task = this.getTask(taskId);
        updatedFields.updated_at = new Date();
        const newTask: Task = Object.assign(task, updatedFields);
        this.tasks = this.tasks.map(task => task.id === taskId ? newTask : task);

        return newTask;
    }
}
