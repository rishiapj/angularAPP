import { Component, OnInit } from '@angular/core';  
import { Employee } from "../employee";  
import { EmprecordService } from "../emprecord.service";  
import { Observable } from "rxjs";  
import { Router } from '@angular/router';  
import { first} from "rxjs/operators";

    @Component({  
      selector: 'app-employee',  
      templateUrl: './employee.component.html',  
      styleUrls: ['./employee.component.css']  
    })  
    export class EmployeeComponent implements OnInit {  
      public emp: Employee[];  
      massage:String;  
      dataSaved=false;  
      constructor(private router: Router,private emprecordService:EmprecordService) { }  
       Loademployee()  
       {  
          this.emprecordService.GetEmployeeRecord().pipe(first()).subscribe(emp=>{
            this.emp=emp;
          });
       }  
       EmployeeEdit(id: string) {  
       localStorage.removeItem("id");  
       localStorage.setItem("id",id.toString());  
        this.router.navigate(['/addemployee'], { queryParams: { Id: id } });  
      }  
       Deleteemployee(id: string) {  
        if (confirm("Are You Sure To Delete this Informations")) {  
          this.emprecordService.DeleteEmployee(id).subscribe(  
            () => {  
              this.dataSaved = true;  
              this.massage = "Deleted Successfully";  
            }  
          );  
          this.router.navigate(['/employee']); 
          this.Loademployee(); 
        }  
      }  
      ngOnInit() {  
        localStorage.clear();
        this.Loademployee();  
      }  
    }