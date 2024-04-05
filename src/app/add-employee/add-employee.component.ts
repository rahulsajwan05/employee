import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empList } from 'src/assets/interfaces/emplist';
import { EmplistService } from 'src/assets/services/emplist.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  empData = {
    code: '',
    name: '',
    address:'',
    mobile:'',
    dob:'',
    remarks:'',
  };

  addProductSuccessfully:string|undefined;  

  constructor(private _empListService:EmplistService, private _router:Router){

  }

  ngOnInit(): void {
    if(!localStorage.getItem('user')){
      this._router.navigate(['/']);
    }
  }

  addEmp(data:empList){
    this._empListService.addproduct(data).subscribe((res) => {
      console.warn(res);
      if(res){
        this.addProductSuccessfully="Product add successfully";
        // this._router.navigate(["list"])
        // this.onFormSubmit()
      }
    })
    setTimeout(() => (this._router.navigate(["list"])),2000)
  }

}
