import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ItalicTextDirective } from './italic-text.directive';
import { Page3Component } from './page3/page3.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTempComponent } from './form-temp/form-temp.component';
import { AddSuffixPipe } from './pipes/custom.pipe';
import { ErrorInterceptor } from './interceptor';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './taskservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ItalicTextDirective,
    Page3Component,
    Page1Component,
    Page2Component,
    MyFormComponent,
    FormTempComponent,
    AddSuffixPipe,
    TaskAddComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [TaskService, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})

export class AppModule { }