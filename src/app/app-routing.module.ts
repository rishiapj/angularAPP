import { NgModule } from '@angular/core';  
    import { Routes, RouterModule } from '@angular/router';  
    import { EmployeeComponent } from "./employee/employee.component";  
    import { AddemployeeComponent } from "./addemployee/addemployee.component";  
    import { LoginComponent } from "./login/login.component";  

    const routes: Routes = [  

     {path:"",component: LoginComponent},
     {path:"employee",component:EmployeeComponent},  
     {path:"addemployee",component:AddemployeeComponent},  
     {path:"login",component:LoginComponent},
     {path:"**",component: EmployeeComponent}
    ];  
    
    // @NgModule({  
    //   imports: [RouterModule.forRoot(routes)],  
    //   exports: [RouterModule]  
    // })  
    export const appRoutingModule =  RouterModule.forRoot(routes);