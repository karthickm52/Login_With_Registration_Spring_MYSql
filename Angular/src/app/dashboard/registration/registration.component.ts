import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  conpass=false;
  u:User=new User();
  constructor( private userService:UserService , private router:Router) { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    firstname: new FormControl("",[
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z].*')]),

    lastname:new FormControl("",[
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('[a-zA-Z].*')
    ]),

    email:new FormControl("",[Validators.required,Validators.email]),

    mobile:new FormControl("",[
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),

    gender:new FormControl('',[Validators.required]),

    pwd:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
    ]),
    cpwd:new FormControl('',[
      Validators.required,
     
    ]),
  })

  registerSubmitted(){
    if(this.PWD.value==this.CPWD.value){
      this.conpass=false;
      this.u.firstname=this.FirstName.value;
      this.u.lastname=this.LastName.value;
      this.u.email=this.Email.value;
      this.u.mobile=this.Mobile.value;
      this.u.gender=this.Gender.value;
      this.u.password=this.PWD.value;
      this.u.id='';
      this.save();
      this.router.navigate(['user',this.FirstName.value]);

    }
    else{
      this.conpass=true;
    }
  }

  save(){
    this.userService.save(this.u).subscribe(data => console.log(data));
    this.u=new User();
    
  }

  get FirstName():FormControl{
    return this.registerForm.get('firstname') as FormControl
  }
  get LastName():FormControl{
    return this.registerForm.get('lastname') as FormControl
  }
  get Email():FormControl{
    return this.registerForm.get('email') as FormControl
  }
  get Mobile():FormControl{
    return this.registerForm.get('mobile') as FormControl
  }
  get Gender():FormControl{
    return this.registerForm.get('gender') as FormControl
  }

  get PWD():FormControl{
    return this.registerForm.get('pwd') as FormControl
  }
  get CPWD():FormControl{
    return this.registerForm.get('cpwd') as FormControl
  }
}
