import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../taskservice.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  taskForm!: FormGroup;
  tasks: Task[] = [];
  edit_n: number = -1;
  n: number = 0;
  Soups: string[] = ['Том Ям', 'Сырный крем-суп'];
  Salads: string[] = ['Греческий', 'Цезарь с курицей', 'Цезарь с креветками'];
  Pizza: string[] = ['Пепперони', 'Карбонара', 'Острая мясная'];
  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      soups: ['', Validators.required],
      salads: ['', Validators.required],
      pizza: ['', Validators.required],
      price: ['', Validators.required],
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
        this.tasks[this.edit_n].soups = this.taskForm.value.soups;
        this.tasks[this.edit_n].salads = this.taskForm.value.salads;
        this.tasks[this.edit_n].pizza = this.taskForm.value.pizza;
        this.tasks[this.edit_n].price = this.taskForm.value.price;
        this.tasks[this.edit_n].wishes = this.taskForm.value.wishes;
        this.taskForm.reset();
        this.edit_n = -1;
      }
    }
  }

  editTask(id: number): void {
    const index2 = this.tasks.findIndex(task => task.id === id);
    const taskToEdit = this.tasks[index2];
    this.edit_n = index2;
    this.taskForm.patchValue({
      soups: taskToEdit.soups,
      salads: taskToEdit.salads,
      pizza: taskToEdit.pizza,
      price: taskToEdit.price,
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
