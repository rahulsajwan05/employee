import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empList } from 'src/assets/interfaces/emplist';
import { EmplistService } from 'src/assets/services/emplist.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  empData: undefined|empList;
  Message:undefined|string;
  constructor(private _activateRouter:ActivatedRoute, private _empService : EmplistService, private _router:Router){

  }

  ngOnInit(): void {
     let empId= this._activateRouter.snapshot.paramMap.get('empId');
    console.log(empId);
    empId && this._empService.getProduct(empId).subscribe((result)=>{
      console.warn(result);
      this.empData=result;
    });
  }


  update(data:empList){
    if(this.empData){

      data.id=this.empData.id
      data.code=this.empData.code
    }

    console.log(this.empData)
    // let codeNum= this.empData?.code;
    let cartData:empList={
      ...data,
      code:data.code
    }


    console.log(cartData)

    this._empService.updateProduct(cartData).subscribe((result) =>{
    console.log(result)
      console.log(this.empData)
      
      if(result){
        this.Message="Product added successfully";
      }
    })
    setTimeout(()=>{
      this.Message=undefined;
      this._router.navigate(['/list'])
    },2000)
  }  
  
}
