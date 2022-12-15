import { Injectable, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

    
  constructor() { }
  ngOnInit(): void {

  }


  authenticate(email:any)
  {
      sessionStorage.setItem('authenticateUser',email);
      return true;
  }
  
isUserLoggedIn()
  {
    let user=sessionStorage.getItem('authenticateUser');
    return!(user==null)
  }
  logout()
  {
    sessionStorage.removeItem('authenticateUser');
  }
  
}
