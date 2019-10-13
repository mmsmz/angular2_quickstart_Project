import {Component}  from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
             <div>
                 <h1> {{pageheader}} </h1>
                 <my-employee></my-employee>
             </div>`
})
export class AppComponent {
  pageheader : string = "Employee Details";
}