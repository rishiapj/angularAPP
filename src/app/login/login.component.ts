import { Component, OnInit } from '@angular/core';
import { EmprecordService } from "../emprecord.service";  
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {
  UserName='';
  Password='';
  flag=0;
  

  public loginDetails=[];

  constructor(private _loginService: EmprecordService, private router: Router) { }

  ngOnInit() {
    // this._loginService.GetLoginDetails()
    // .subscribe(data=>this.loginDetails=data);
  }
  onClick(){
    if( this.UserName === '' || this.Password === ''){
      return alert("Input Fields can't be Empty!!");
    }
    else {
      this._loginService.GetLoginDetails(this.UserName, this.Password).subscribe(emp => {  
        debugger;  
        this.flag = 1;
        // this.EmployeeIdUpdate=id;
        // this.Addemployee.controls['Name'].setValue(emp.name);  
        // this.Addemployee.controls['Department'].setValue(emp.department);  
        // this.Addemployee.controls['City'].setValue(emp.city);  
        // this.Addemployee.controls['Country'].setValue(emp.country);  
        // this.Addemployee.controls['Address'].setValue(emp.address);  
      });
      if(this.flag==0){
        return alert("Login Faild. Invalid Credentials!!");
      }
      else if(this.flag == 1){
        this.router.navigate(['/employee']);
      }
    }



  }
}