import { Component, OnInit } from '@angular/core';  
import { Employee } from "../employee";  
import { EmprecordService } from "../emprecord.service";  
import { Observable } from "rxjs";  
import { Router } from '@angular/router';  
import { first} from "rxjs/operators";
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';

    @Component({  
      selector: 'app-employee',  
      templateUrl: './employee.component.html',  
      styleUrls: ['./employee.component.css']  
    })  
    export class EmployeeComponent implements OnInit {  
      public emp: Employee[];  
      massage:String;  
      dataSaved=false;  
      private columnDefs: ColDef[];
        // gridApi and columnApi
    private api: GridApi;
    private columnApi: ColumnApi;
      constructor(private router: Router,private emprecordService:EmprecordService) 
      {
        this.columnDefs = this.createColumnDefs();

       }  
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

        // create some simple column definitions
    private createColumnDefs() {
      return [
          {field: 'id'},
          {field: 'name'},
          {field: 'department'},
          {field: 'city', valueGetter: (params) => params.data.city.name},
          {field: 'country', valueGetter: (params) => params.data.country.name},
      ]
  }

  // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.api.sizeColumnsToFit();
}
    }