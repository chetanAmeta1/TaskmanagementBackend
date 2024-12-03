import { Component, OnInit } from '@angular/core';
import { GlobelServiceService } from '../globel-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private service : GlobelServiceService,private fb : FormBuilder, private router: Router) { }
  userForm = new FormGroup({});
  isSubmit:boolean=false;
  submit(){
    this.isSubmit = true;
    if(this.userForm.invalid){
      return
    }
    this.service.registerUser(this.userForm.value).subscribe((data)=>{
    if(data){
      alert('User register successfully!');
      this.userForm.reset();
      this.router.navigate(['/login']);
    }
    })
  }
  ngOnInit(): void {
    this.userForm =this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required] 
    })
  }

}
