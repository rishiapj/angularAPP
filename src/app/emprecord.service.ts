import { Injectable } from '@angular/core';
import { Observable } from "rxjs";  
import {HttpHeaders, HttpClient, HttpErrorResponse  } from "@angular/common/http";  
import { Employee } from "../app/employee";  
import { User } from './user';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmprecordService {
  
  Url="http://localhost:5000/Api/Employee/";  
  apiBaseUrl="http://localhost:5000/";
  constructor(private http:HttpClient) { }  
  
  getCountries() {
    return this.http.get(`${this.apiBaseUrl}Api/Employee/GetAllCountry`).pipe(
      catchError(this.handleError)
    );
  }

  getStates(countryId: number) {
    debugger;
    return this.http.get(`${this.apiBaseUrl}api/Employee/GetAllStateBasedOnCountry/?id=${countryId}`).pipe(
      catchError(this.handleError)
    );
  }

  getCities(stateId: number) {
    return this.http.get(`${this.apiBaseUrl}api/Employee/GetAllCityeBasedOnState/?id=${stateId}`).pipe(
      catchError(this.handleError)
    );
  }

  GetLoginDetails(userid:string,password:string){
    debugger;  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    return this.http.post<User>(this.Url + 'GetUserByUserIdAndPassword' + '?userid=' + userid + '&password='  + password, httpOptions );  
  }

  InsertUser(user:User)  
  {  
    debugger;  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<User[]>(this.Url+'InsertUser',JSON.stringify(user),httpOptions)  
  }  

  InsertEmployee(employee:Employee)  
  {  
    debugger;  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Employee[]>(this.Url+'InsertEmployee',JSON.stringify(employee),httpOptions)  
  }  
  GetEmployeeRecord()
  {  
   return this.http.get<Employee[]>(this.Url+"GetAllEmployee");  
  }  
  DeleteEmployee(id:string):Observable<number>  
  {  
    debugger;  
   return this.http.get<number>(this.Url + 'Delete/?id='+id);  
  }  
  GetEmployeeById(id:any)  
  {  
   return this.http.get<Employee>(this.Url + 'GetEmployeeById/?id=' + id);  
  }  
  UpdatEmplouee(employee:Employee)  
  {  
   debugger;  
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Employee[]>(this.Url+'/UpdateEmployee/', employee,httpOptions)  
  }  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
