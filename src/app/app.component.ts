import {Component}  from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
             <div>
                <!-- <h1> {{'Page Header ' + pageHeader}} </h1> -->
                <!-- <h1> {{10+20+30}} </h1> -->
                
                <!-- using ternary operator
                <h1> {{ pageHeader ? pageHeader : 'No header'}} </h1> 
                <img src='https://png.pngtree.com/element_our/sm/{{imagePath}}' />-->
                <h1> {{ getFullName()}} </h1> 
                <my-employee></my-employee>
    
                <!--<button [disabled]='isDisabled'>Click Me</button>-->
                <button disabled='{{isDisabled}}'>Click Me</button>

                <span bind-innerHtml='pageHeader'></span>

                <div [innerHtml]='badHtml'>{{badHtml}}</div>
             </div>`
})
export class AppComponent {
  
  pageHeader : string = "Employee Details";
  imagePath : string = '20180518/sm_5aff6089d3e02.png';
  isDisabled: boolean = false;
  badHtml: String = 'hello <script>alert("Hacked");</script> World'

  firstName : string = 'Tom';
  lastName : string = 'Sammy';

  getFullName(): string{
      return this.firstName + " " + this.lastName;
  }

}