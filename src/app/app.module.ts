import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskCreateUpdateComponent } from './task-create-update/task-create-update.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserLogInComponent } from './user-log-in/user-log-in.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    TaskCreateUpdateComponent,
    TaskListComponent,
    UserLogInComponent,
    UserRegisterComponent, 
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true // Allows multiple interceptors
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
