import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobelServiceService } from '../globel-service.service';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.css']
})
export class UserLogInComponent implements OnInit {

  constructor(private service : GlobelServiceService,private fb : FormBuilder, private router: Router) { }
  loginForm = new FormGroup({});
  isSubmit:boolean=false;
  submit(){
    this.isSubmit = true;
    if(this.loginForm.invalid){
      return
    }
    this.service.userLogin(this.loginForm.value).subscribe((data)=>{
      if(data){
        localStorage.setItem('activeUser',JSON.stringify(data))
      alert('User Login successfully!');
      this.loginForm.reset();
      this.router.navigate(['/task-list']);
    }
    })
  }
  ngOnInit(): void {
    this.loginForm =this.fb.group({
      username:['',Validators.required], 
      password:['',Validators.required] 
    })
  }

}
