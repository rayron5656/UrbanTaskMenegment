import { taskStatus } from "./taskStatus.model";

export class task {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    status: taskStatus;

    constructor(id: number, title: string, description: string, dueDate: Date, status: taskStatus) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }



    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getDescription(): string {
        return this.description;
    }

    getDueDate(): Date {
        return this.dueDate;
    }

    getStatus(): string {
        return this.status;
    }


    setId(id: number): void {
        this.id = id;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setDueDate(dueDate: Date): void {
        this.dueDate = dueDate;
    }

    setStatus(status: taskStatus): void {
        this.status = status;
    }


  }