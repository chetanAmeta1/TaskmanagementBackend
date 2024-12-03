import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLogInComponent } from './user-log-in/user-log-in.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateUpdateComponent } from './task-create-update/task-create-update.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: UserRegisterComponent },
  {
      path: 'login', component: UserLogInComponent
  },
 
  { path: 'task-list', component: TaskListComponent  
    , canActivate:[AuthGuard]
  },
  {
    path: 'task-create', component: TaskCreateUpdateComponent , canActivate:[AuthGuard]},
    {path: 'task-update/:id', component: TaskCreateUpdateComponent, canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
