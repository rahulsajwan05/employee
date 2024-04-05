import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empList } from 'src/assets/interfaces/emplist';
import { EmplistService } from 'src/assets/services/emplist.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  empList: undefined | empList[];
  deleteMessage: undefined | string;
  constructor(private _empService: EmplistService, private _router:Router) {

  }

  ngOnInit(): void {
    // if(!localStorage.getItem('user')){
    //   this._router.navigate(['/']);
    // }else{

      this.getAllProduct();
    // }
  }

  getAllProduct(){
    this._empService.getAllProducts().subscribe((result) => {
      console.warn(result)
      this.empList = result;
      
      // this.productList=res;
      console.warn(this.empList)
    })
  }

  deleteProduct(id: number) {
    this._empService.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.deleteMessage = "Employee is deleted";
        this.getAllProduct();
      }
    })
  }
}
