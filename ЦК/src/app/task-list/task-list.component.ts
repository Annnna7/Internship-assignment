import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../taskservice.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit 
{
  tasks!: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void 
  {
    this.loadTasks();
  }

  loadTasks(): void 
  {
    this.taskService.getTasks().subscribe(tasks => 
    {
      this.tasks = tasks;
    });
  }
}
