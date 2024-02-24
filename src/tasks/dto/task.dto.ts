import { Priority } from "../tasks.entity";

export class CreateTaskDto{
    title: string;
    description: string;
    priority: Priority;
}