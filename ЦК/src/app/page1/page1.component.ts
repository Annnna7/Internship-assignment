import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../taskservice.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})

export class Page1Component implements OnInit{
  taskForm!: FormGroup;
  tasks: Task[] = [];
  edit_n: number = -1;
  n: number = 1;
  restOptions: string[] = ['Самара', 'Оренбург', 'Санкт-Петербург', 'Москва', 'Нижний Новгород'];
  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      restaurant: ['', Validators.required],
      people: ['', Validators.required],
      date_time: ['', Validators.required],
      first_name: ['', Validators.required],
      phone: ['', Validators.required],
      wishes: ['']
    });
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      if (this.edit_n == -1) {
        const newTask: Task =
        {
          id: this.n,
          createdAt: new Date(),
          lastModifiedAt: new Date(),
          ...this.taskForm.value
        };
        this.taskService.addTask(newTask);
        this.taskForm.reset();
        this.n += 1
      }
      else {
        this.tasks[this.edit_n].restaurant = this.taskForm.value.restaurant;
        this.tasks[this.edit_n].people = this.taskForm.value.people;
        this.tasks[this.edit_n].date_time = this.taskForm.value.date_time;
        this.tasks[this.edit_n].first_name = this.taskForm.value.first_name;
        this.tasks[this.edit_n].phone = this.taskForm.value.phone;
        this.tasks[this.edit_n].wishes = this.taskForm.value.wishes;
        this.taskForm.reset();
        this.edit_n = -1;
      }
    }
  }

  editTask(id: number): void {
    const index1 = this.tasks.findIndex(task => task.id === id);
    const taskToEdit = this.tasks[index1];
    this.edit_n = index1;
    this.taskForm.patchValue({
      restaurant: taskToEdit.restaurant,
      people: taskToEdit.people,
      date_time: taskToEdit.date_time,
      first_name: taskToEdit.first_name,
      phone: taskToEdit.phone,
      wishes: taskToEdit.wishes,
    });
  }

  ngOnInit1(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}