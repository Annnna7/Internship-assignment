import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../taskservice.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit 
{
  taskForm!: FormGroup;
  tasks: Task[] = [];

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

  ngOnInit(): void 
  {
    this.taskForm = this.formBuilder.group({
      type: ['', Validators.required],
      priority: [''],
      status: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
      executor: [''],
      creator: ['', Validators.required]
    });
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  onSubmit(): void 
  {
    if (this.taskForm.valid) {
      const newTask: Task = 
      {
        id: Math.floor(Math.random() * 1000),
        createdAt: new Date(),
        lastModifiedAt: new Date(),
        ...this.taskForm.value
      };
      this.taskService.addTask(newTask);
      this.taskForm.reset();
    }
  }
}
