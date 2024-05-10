import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService 
{
  private tasks: Task[] = [];
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  constructor() { }

  // Добавление задачи
  addTask(task: Task): void 
  {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  // Получение всех задач
  getTasks(): Observable<Task[]> 
  {
    return this.tasksSubject.asObservable();
  }

}