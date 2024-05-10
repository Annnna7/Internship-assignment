import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CanActivatePageGuard } from './can-activate-page.guard';
import { CanDeactivatePageGuard } from './can-deactivate-page.guard';

const routes: Routes = [
  { path: 'page1/:id', component: Page1Component, canActivate: [CanActivatePageGuard] },
  { path: 'page2/:id', component: Page2Component, canDeactivate: [CanDeactivatePageGuard] },
  { path: 'page3', component: Page3Component },
  {path: 'task-add', component: TaskAddComponent},
  {path: 'task-list', component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
