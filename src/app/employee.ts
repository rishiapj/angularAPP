import { City } from './city';
import { Country } from './country';
import { State } from './state';
export class Employee {
    Id: string;  
    name: string;  
    department: string;  
    phone:string;
    email:string;
    address: string;  
    city: City;  
    country: Country;
    state: State;
}
