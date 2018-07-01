import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .bigCounter{
      color: white;
    }
  `]
})
export class AppComponent {
  clickList = [];
  counter = 0;
  showSecret = false;
  displayContent = "Secret Password = tuna";
  onClickButton(){
    this.showSecret = !this.showSecret;
    this.counter = this.counter + 1;
    this.clickList.push(this.counter);
  }


}
