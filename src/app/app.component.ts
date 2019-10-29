import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameapp';
  oddArray: number[] = [];
  evenArray: number[] = [];
  onIntervalFired(sentNum: number) {
    if (sentNum % 2 !== 0) {
      this.oddArray.push(sentNum);
    }
    else {
      this.evenArray.push(sentNum);
    }
  }
}
