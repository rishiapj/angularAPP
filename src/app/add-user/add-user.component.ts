import { Component, OnInit } from '@angular/core';  
import { HttpClient } from "@angular/common/http";  
import { FormGroup, FormControl } from '@angular/forms';  
import { EmprecordService } from "../emprecord.service";  
import { Observable } from "rxjs";  
import { identifierModuleUrl } from '@angular/compiler';  
import { Router } from '@angular/router';  
import { User } from "../user";  


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  massage: string;  
  dataSaved = false;  
  AddUser:FormGroup;  
  UserIdUpdate = "0"; 
  constructor(private router: Router,private emprecordService:EmprecordService) { }
  InsertUser(user:User)  
  {  
debugger;  
    if (this.UserIdUpdate != "0") user.Id=this.UserIdUpdate;  
      this.emprecordService.InsertUser(user).subscribe(  
        ()=>  
        {  
          if (this.UserIdUpdate == "0") {  
            this.massage = 'Saved Successfully';  
          }  
          else  
          {  
            this.massage = 'Update Successfully';  
          }  
          this.dataSaved = true;  
          this.router.navigate(['/login']);  
        })  
  } 
  onFormSubmit() {  
    const Emp = this.AddUser.value;  
    alert('');
    this.InsertUser(Emp);  
  }  
  ngOnInit() {
    this.AddUser = new FormGroup({  
      Name: new FormControl(),  
      UserName:new FormControl(),  
      Password:new FormControl(),  
     
  });  
  }

}
