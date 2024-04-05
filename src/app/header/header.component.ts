import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { empList } from 'src/assets/interfaces/emplist';
import { EmplistService } from 'src/assets/services/emplist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchedEmp:undefined | empList[];

  constructor(private _router:Router, private _empService:EmplistService){

  }
  
  search(query:KeyboardEvent){
    console.warn(query);
    
    if(query){
      const element= query.target as HTMLInputElement
      console.warn(element.value);
      
     this._empService.searchEmp(element.value).subscribe((data)=>{
      if(data){
        console.warn(data);
        if(data.length>3){
          data.length=4;
        }

        this.searchedEmp=data;
        console.warn(this.searchedEmp);
      }
     })
    }
  }

  hiddenSearch(){
    this.searchedEmp=undefined;
  }

  logout(){
    localStorage.removeItem('user')
    setTimeout(()=>{
      this._router.navigate(['/login']);
    }, 1000);
  
   
  }
  
  submit(val:string){
    console.warn(val);
    this._router.navigate([`search/${val}`]);
  }

  redirectToDetail(id:number){
    this._router.navigate(['/details/'+id]);
  }
  
}
