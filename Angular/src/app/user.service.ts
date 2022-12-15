import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8082/';
  
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}`+'users');
  }
    

  public save(user: object ):Observable<object> {
    return this.http.post(`${this.usersUrl}`+'saveUser', user);  
  }

  // public delete(id :string):Observable<any>{
  //   return this.http.delete(`${this.usersUrl}deleteuser/${id}`, { responseType: 'text' });  
  // }

  // public update(id :string,value:any):Observable<object>{
  //   return this.http.put(`${this.usersUrl}update-student/${id}`,value);
  // }
  // public getbyId(id:string):Observable<User[]>{
  //   return this.http.get<User[]>(`${this.usersUrl}getUser/${id}`);
  // }

 
}