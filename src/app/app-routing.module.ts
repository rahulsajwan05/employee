import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpLoginGuard } from 'src/assets/emp-login.guard';
import { UpdateComponent } from './update/update.component';



const routes: Routes = [
  {path:'',component:LoginComponent ,},
  {path:'login',component:LoginComponent, },
  {path:'list',component:EmployeeListComponent , canActivate:[EmpLoginGuard]},
  {path:'addemp',component:AddEmployeeComponent, canActivate:[EmpLoginGuard]},  
  {path:"details/:empId",component:EmpDetailComponent, canActivate:[EmpLoginGuard]},
  {path:"update/:empId",component:UpdateComponent, canActivate:[EmpLoginGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
