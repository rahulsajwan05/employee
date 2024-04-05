import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/assets/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  invalidUserAuth=new EventEmitter<boolean>(false)
  // loginGuard=new EventEmitter<boolean>(false)
  constructor(private _http: HttpClient , private _router:Router) { }

  userLogin(user:login){
    console.warn(user);
    
    var url='http://localhost:3000/users?email='+user.email+'&password='+user.password;
    this._http.get<login[]>(url,{observe:'response'}).subscribe((result)=>{
      if(result && result.body?.length){
        this.invalidUserAuth.emit(false)
        // this.loginGuard.emit(true)
        localStorage.setItem("user",JSON.stringify(result.body[0]));
        this._router.navigate(['/list']);
      } else {
        this.invalidUserAuth.emit(true)
      }
    });
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      // this.loginGuard.emit(true)
      this._router.navigate(['list']);
    }
  }
}
