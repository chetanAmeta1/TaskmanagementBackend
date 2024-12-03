import { Component, OnInit } from '@angular/core';
import { GlobelServiceService } from '../globel-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private service:  GlobelServiceService) { }
  data:any=[];
  getTasks(){
  
    this.service.getTasks().subscribe((data:any)=>{
    this.data = data;
    })
  }
  
  deleteTask(taskId:any){
    this.service.deleteTask(taskId).subscribe((data:any)=>{
      if(data){
        alert('Tast deleted successfully!');        
        this.getTasks();
      }
      })
  }
  complateTask(taskData:any){
    taskData.status = 1;
    this.service.updateTask(taskData._id,taskData).subscribe((data:any)=>{
      if(data){
        alert('Tast updated successfully!');
        this.getTasks();
      }
      })
  }
  
  ngOnInit(): void {
    this.getTasks();
  }

}
