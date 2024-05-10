import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../taskservice.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})

export class Page3Component implements OnInit 
{
  taskForm!: FormGroup;
  tasks: Task[] = [];
  edit_n: number = -1;
  n: number = 0;
  Alc: string[] = ['Виски-кола', 'Голубая лагуна', 'Мохито', 'Пино Колада', 'Мятный поцелуй', 'Чио-Рио', ' -'];
  NoAlc: string[] = ['Ягодный лимонад', 'Мохито', 'Тархун', 'Сок Яблоко', 'Сок Вишня', '-'];
  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      tea_cof: ['', Validators.required],
      alc: ['', Validators.required],
      noalc: ['', Validators.required],
      beer: ['', Validators.required],
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
        this.tasks[this.edit_n].tea_cof = this.taskForm.value.tea_cof;
        this.tasks[this.edit_n].alc = this.taskForm.value.alc;
        this.tasks[this.edit_n].noalc = this.taskForm.value.noalc;
        this.tasks[this.edit_n].beer = this.taskForm.value.beer;
        this.tasks[this.edit_n].wishes = this.taskForm.value.wishes;
        this.taskForm.reset();
        this.edit_n = -1;
      }
    }
  }

  editTask(id: number): void {
    const index3 = this.tasks.findIndex(task => task.id === id);
    const taskToEdit = this.tasks[index3];
    this.edit_n = index3;
    this.taskForm.patchValue({
      tea_cof: taskToEdit.tea_cof,
      alc: taskToEdit.alc,
      noalc: taskToEdit.noalc,
      beer: taskToEdit.beer,
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