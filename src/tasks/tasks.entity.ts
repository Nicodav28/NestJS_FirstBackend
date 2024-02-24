enum TaskStatus{
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

enum Priority{
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}

class Task{
    id: string;
    title: string;
    description: string;
    status?: TaskStatus;
    priority: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

export {Task, TaskStatus, Priority}