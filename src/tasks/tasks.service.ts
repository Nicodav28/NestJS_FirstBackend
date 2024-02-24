import { Injectable } from '@nestjs/common';
import { Task, TaskStatus, Priority } from './tasks.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {

    private tasks: Array<Task> = [{
        id: v4(),
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

    createTask(title: string, description: string, priority: Priority){
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

    deleteTask(){}
    updateTask(){}
    getTask(){}
}
