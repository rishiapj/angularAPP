import { Component, OnInit } from '@angular/core';  
import { HttpClient } from "@angular/common/http";  
import { FormGroup, FormControl,FormBuilder  } from '@angular/forms';  
import { EmprecordService } from "../emprecord.service";  
import { Employee } from "../employee";  
import { Observable } from "rxjs";  
import { identifierModuleUrl } from '@angular/compiler';  
import { Router } from '@angular/router';  
import { Country } from '../country';
import { State } from '../state';
import { City } from '../city';
@Component({  
  selector: 'app-addemployee',  
  templateUrl: './addemployee.component.html',  
  styleUrls: ['./addemployee.component.css']  
})  

export class AddemployeeComponent implements OnInit {  
  massage: string;  
  dataSaved = false;  
  Addemployee:FormGroup;  
  EmployeeIdUpdate = "0";  
  btnText ="Save";
  countries: {};
  states: {};
  cities: {};
  constructor(private router: Router, private formBuilder:FormBuilder,private emprecordService:EmprecordService) { }  
  InsertEmployee(employee:Employee)  
  {  
    if (this.EmployeeIdUpdate != "0") employee.Id=this.EmployeeIdUpdate; 
    var country = new Country();
    var city = new City();
    var state = new State();
    country.countryId = this.Addemployee.controls['CountryId'].value;
    city.cityId = this.Addemployee.controls['CityId'].value;
    state.stateId= this.Addemployee.controls['StateId'].value;
    employee.country = country;
    employee.city = city;
    employee.state = state;
      this.emprecordService.InsertEmployee(employee).subscribe(  
        ()=>  
        {  
          if (this.EmployeeIdUpdate == "0") {  
            this.massage = 'Saved Successfully';  
          }  
          else  
          {  
            this.massage = 'Updated Successfully';  
          }  
          this.dataSaved = true;  
          this.router.navigate(['/addemployee']);  
        })  
  }  


  onFormSubmit() {  
    const Emp = this.Addemployee.value;  
    this.InsertEmployee(Emp);  
  }  


  EmployeeEdit(id: string) {  
    this.emprecordService.getCountries().subscribe(
      data => this.countries = data
    );
      this.emprecordService.GetEmployeeById(id).subscribe(emp => {  
        this.massage = null;  
        this.dataSaved = false;  
        this.EmployeeIdUpdate=id;
        this.Addemployee.controls['Name'].setValue(emp.name);  
        this.Addemployee.controls['Department'].setValue(emp.department);  
        this.Addemployee.controls['Address'].setValue(emp.address);  
        this.Addemployee.controls['CountryId'].setValue(emp.country.countryId); 
        if (emp.country.countryId) {
      this.emprecordService.getStates(Number(emp.country.countryId)).subscribe(
        data => {
          this.states = data;     
        }
      );
    } else {
      this.states = null;
      this.cities = null;
    }
        this.Addemployee.controls['StateId'].setValue(emp.state.stateId); 
         if (emp.state.stateId) {
      this.emprecordService.getCities(Number(emp.state.stateId)).subscribe(
        data => this.cities = data
      );
    } else {
      this.cities = null;
    }  
        this.Addemployee.controls['CityId'].setValue(emp.city.cityId);     
    });  
    this.btnText ="Update";
  }  
  clearform() {  
    this.Addemployee.controls['Name'].setValue("");  
    this.Addemployee.controls['Department'].setValue("");  
    this.Addemployee.controls['Address'].setValue("");  
    this.Addemployee.controls['City'].setValue("");  
    this.Addemployee.controls['Country'].setValue("");  
  }  
  ngOnInit() {  
    this.Addemployee = new FormGroup({  
      Name: new FormControl(),  
      Department:new FormControl(),  
      Address:new FormControl(),  
      CountryId: new FormControl(''),
      StateId: new FormControl(''),
      CityId:new FormControl(""),  
      City: this.formBuilder.group(new City()),
      Country: this.formBuilder.group(new Country()),
      State: this.formBuilder.group(new State()),
  });  
  let Id = localStorage.getItem("id");  
if(Id!=null)  
{  
  this.EmployeeEdit(Id) ;  
 }
 else{

 this.emprecordService.getCountries().subscribe(
  data => this.countries = data
);
 }

 }

onChangeCountry(countryId: number) {
  if (countryId) {
    this.emprecordService.getStates(countryId).subscribe(
      data => {
        this.states = data;
        this.cities = null;
      }
    );
  } else {
    this.states = null;
    this.cities = null;
  }
}

onChangeState(stateId: number) {
  if (stateId) {
    this.emprecordService.getCities(stateId).subscribe(
      data => this.cities = data
    );
  } else {
    this.cities = null;
  }
}
}