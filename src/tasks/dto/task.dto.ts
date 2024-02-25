import { Priority, TaskStatus } from "../tasks.entity";

export class CreateTaskDto{
    title: string;
    description: string;
    priority: Priority;
}

export class UpdateTaskDto{
    title: string;
    description: string;
    status: TaskStatus;
    priority: string;
}