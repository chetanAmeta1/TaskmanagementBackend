import { Component, OnInit } from '@angular/core';
import { GlobelServiceService } from '../globel-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-create-update',
  templateUrl: './task-create-update.component.html',
  styleUrls: ['./task-create-update.component.css']
})
export class TaskCreateUpdateComponent implements OnInit {

  constructor(private service : GlobelServiceService,private fb : FormBuilder, private router: Router, private route: ActivatedRoute) { }
  taskForm = new FormGroup({});
  taskId:any='';
  isSubmit:boolean=false;
  submit(){
    this.isSubmit = true;
    if(this.taskForm.invalid){
      return
    }
    // updateTask
    if(this.taskId){
    this.updateTask();
    }else{
      this.service.createNewTask(this.taskForm.value).subscribe((data:any)=>{
        if(data){
          alert('Tast created successfully!');
          this.taskForm.reset();
          this.router.navigate(['/task-list']);
        }
        })
    }
  
  }
  updateTask(){
    this.service.updateTask(this.taskId,this.taskForm.value).subscribe((data:any)=>{
      if(data){
        alert('Tast updated successfully!');
        this.taskForm.reset();
        this.router.navigate(['/task-list']);
      }
      })
  }  
  getTask(){
  
    this.service.getTask(this.taskId).subscribe((data:any)=>{
      this.taskForm.patchValue({
        name: data.name,
        description: data.description,
      });
      console.log(data)
    })
  }
  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');   
    this.taskForm =this.fb.group({
      name:['',Validators.required],
      description:['',Validators.required] 
    })
    if(this.taskId){
      this.getTask()
          }
  }

}
