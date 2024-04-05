import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empList } from 'src/assets/interfaces/emplist';
import { EmplistService } from 'src/assets/services/emplist.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  empData: undefined|empList;
  
  constructor(private _activateRouter:ActivatedRoute, private _router:Router, private _empService: EmplistService){

  }

  ngOnInit(): void {
    // if(!localStorage.getItem('user')){
    //   this._router.navigate(['/']);
    // }else{
    
    let empId= this._activateRouter.snapshot.paramMap.get('empId');
    console.log(empId);
    empId && this._empService.getProduct(empId).subscribe((result)=>{
      console.warn(result);
      this.empData=result;
    });
  // }
}
}
