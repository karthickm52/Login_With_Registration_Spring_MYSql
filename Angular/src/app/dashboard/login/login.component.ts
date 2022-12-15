import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users:User[]=[];
  invalidMsg=false;
  constructor(private userService:UserService , private router:Router , private auth:AuthService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data=>{
      this.users=data;
        console.log(this.users);
    })
  }

  onSubmit(f:NgForm){
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].email===f.value.email && this.users[i].password===f.value.password){
        this.invalidMsg=false;
        this.auth.authenticate(f.value.email);
        this.router.navigate(['user',this.users[i].firstname]);
      }

    // if(this.auth.authenticate(f.value.email,f.value.password)==true){
    //   this.invalidMsg=false;
    //   this.router.navigate(['user']);
    // }
    else{
      this.invalidMsg=true;
    }
  }
}
    

}

