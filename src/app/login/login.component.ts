import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { login } from 'src/assets/interfaces/auth';
import { UserService } from 'src/assets/services/user-service/user.service';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empData : login= {
    email: '',
    password: '',
  };

  authError:string="";
  constructor(private _userLoginService: UserService, private renderer: Renderer2, private el: ElementRef){
    // greet();
  }
  ngOnInit(): void {
    this._userLoginService.userAuthReload();
  }

  
  login(data:login){
    this._userLoginService.userLogin(data)
    this._userLoginService.invalidUserAuth.subscribe((result)=>{
      console.log(result)
      if(result){
        this.authError="Invalid email and password";
      }
    })    
  }

}
