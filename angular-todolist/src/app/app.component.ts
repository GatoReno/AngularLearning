import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "etho";
  title:string = 'angular-todolist 💀 . ';
   
  constructor(){
    console.log(this.name);
    this.changeName("kyo");
   }
   changeName(name:string): void
   {
      this.name = name;
      console.log(this.name);
   }
}
