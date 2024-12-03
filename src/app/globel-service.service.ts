import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobelServiceService {

  constructor(private http : HttpClient) { }
  registerUser(data:any){
    return this.http.post(`${environment.apiUrl}/users`,data);

  }
  createNewTask(data:any){
    return this.http.post(`${environment.apiUrl}/tasks`,data);

  }
  userLogin(data:any){
    return this.http.post(`${environment.apiUrl}/auth/login`,data);

  }
  getTasks(){
    return this.http.get(`${environment.apiUrl}/tasks`);

  }
  getTask(taskId:any){
    return this.http.get(`${environment.apiUrl}/tasks/${taskId}`);

  }
  updateTask(taskId:any,data:any){
    return this.http.put(`${environment.apiUrl}/tasks/${taskId}`,data);

  }
  deleteTask(taskId:any){
    return this.http.delete(`${environment.apiUrl}/tasks/${taskId}`);

  }
}
