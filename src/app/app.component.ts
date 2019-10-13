import {Component}  from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
             <div>
                <!-- <h1> {{'Page Header ' + pageHeader}} </h1> -->
                <!-- <h1> {{10+20+30}} </h1> -->
                <!-- using ternary operator-->
                <h1> {{ pageHeader ? pageHeader : 'No header'}} </h1> 
                <img [src]='imagePath' />
                <h1> {{ getFullName()}} </h1> 
                <my-employee></my-employee>
             </div>`
})
export class AppComponent {
  pageHeader : string = "Employee Details";
  imagePath : string = 'https://png.pngtree.com/element_our/sm/20180518/sm_5aff6089d3e02.png';

  firstName : string = 'Tom';
  lastName : string = 'Sammy';

  getFullName(): string{
      return this.firstName + " " + this.lastName;
  }
  
}