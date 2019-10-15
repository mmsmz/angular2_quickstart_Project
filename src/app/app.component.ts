import {Component}  from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
             <div>
                <!-- <h1> {{'Page Header ' + pageHeader}} </h1> -->
                <!-- <h1> {{10+20+30}} </h1> -->
                
                <!-- using ternary operator-->
                
                <!--
                <h1> {{ pageHeader ? pageHeader : 'No header'}} </h1> 
                <img src='https://png.pngtree.com/element_our/sm/{{imagePath}}' />
                <h1> {{ getFullName()}} </h1> 
                
                <button [disabled]='isDisabled'>Click Me</button>
                <button disabled='{{isDisabled}}'>Click Me</button>
                <span bind-innerHtml='pageHeader'></span>
                <div [innerHtml]='badHtml'>{{badHtml}}</div>
                
                <my-employee></my-employee>
                <input id='inputId' type='text' value='Tom'>-->

                <button class="colorClass" [class]='classesToApply'>My Button</button>
                <br/><br/>
                <button class="colorClass italicsClass boldClass" [class.boldClass]='applyBoldClass'>My Button</button>
                <br/><br/>
                <button class="colorClass" [ngClass]='addClasses()'>My Button</button>
                </div>`
})
export class AppComponent {
  
  classesToApply : string = 'italicsClass boldClass';
  applyBoldClass : boolean = false;
  applyitalicClass : boolean = false;

  addClasses(){
      let classes = {
          boldClass:this.applyBoldClass, 
          italicsClass:this.applyitalicClass
      };
      return classes;
  }

  //  pageHeader : string = "Employee Details";
  // imagePath : string = '20180518/sm_5aff6089d3e02.png';
  // isDisabled: boolean = false;
  

  // badHtml: String = 'hello <script>alert("Hacked");</script> World'

  // firstName : string = 'Tom';
  // lastName : string = 'Sammy';

  // getFullName(): string{
  //     return this.firstName + " " + this.lastName;
  // }

}