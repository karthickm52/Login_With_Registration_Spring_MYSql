import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.css']
})
export class SimpleLoginComponent implements OnInit {

name ="karthick";

password="karthick"
invalidMsg=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    if(this.name===f.value.username && this.password===f.value.password){
      this.invalidMsg=false;
      this.router.navigate(['welcome',this.name]);
  }
  else{
    this.invalidMsg=true;
  }
}
}
