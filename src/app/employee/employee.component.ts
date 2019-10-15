import {Component} from '@angular/core';

@Component({
    selector : 'my-employee',
    templateUrl : 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']

})
export class EmployeeComponent{
    columnSpan : number =2;


        firstname : string = 'Tom';
        lastname : string = 'Sam';
        gender : string = 'Tom';
        age : number = 20;
}