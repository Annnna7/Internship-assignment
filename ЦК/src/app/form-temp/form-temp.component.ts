import { Component } from '@angular/core';

@Component({
  selector: 'app-form-temp',
  templateUrl: './form-temp.component.html',
  styleUrls: ['./form-temp.component.css']
})
export class FormTempComponent {
  formData: { name: string } = { name: '' };
  entities: any[] = [];

  saveData(form: any) {
    if (form.invalid) {
      return;
    }
    this.entities.push(form.value);
    form.resetForm();
  }

}
