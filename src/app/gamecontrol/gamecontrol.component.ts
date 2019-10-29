import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  //Output sends the info from this file to app.component.html file and the EventEmitter sends the data from the setInterval and clearInterval methods

  @Output() intervalFired = new EventEmitter<number>();
  counts;
  constructor() { }
  countNumber = 0;
  ngOnInit() {
  }

  onStartCount() {
    this.counts = setInterval(() => {
      this.intervalFired.emit(this.countNumber + 1);
      this.countNumber++;
    }, 1000);
  }

  onStopCount() {
    clearInterval(this.counts);
    this.countNumber = 0;
  }
}
