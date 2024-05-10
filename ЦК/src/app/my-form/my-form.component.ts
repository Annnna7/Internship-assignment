import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent 
{
  entities: any[] = [];
  @Output() dataSaved = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    });
  }

  saveData() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.dataSaved.emit(formData);
      this.entities.push(this.form.value);
      this.form.reset();
    }
  }
}
