import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './rendrere/button-renderer-component';

@NgModule({
  declarations: [
    AppComponent,   
    EmployeeComponent,
    AddemployeeComponent,
    LoginPageComponent,
    HeaderComponent,
    HomeComponent,
    AddUserComponent,
    ButtonRendererComponent
    
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([ButtonRendererComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
