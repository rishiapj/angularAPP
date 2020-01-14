import { NgModule } from '@angular/core';  
    import { Routes, RouterModule } from '@angular/router';  
    import { EmployeeComponent } from "./employee/employee.component";  
    import { AddemployeeComponent } from "./addemployee/addemployee.component";  
    import { LoginPageComponent } from "./login/login.component";  
    import  { AddUserComponent } from "./add-user/add-user.component"

    const routes: Routes = [  

     {path:"",component: LoginPageComponent},
     {path:"employee",component:EmployeeComponent},  
     {path:"addemployee",component:AddemployeeComponent},  
     {path:"adduser",component:AddUserComponent},
     {path:"login",component:LoginPageComponent},
     {path:"**",component: EmployeeComponent}
    ];  
    
    // @NgModule({  
    //   imports: [RouterModule.forRoot(routes)],  
    //   exports: [RouterModule]  
    // })  
    export const appRoutingModule =  RouterModule.forRoot(routes);