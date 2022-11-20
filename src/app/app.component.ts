import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  airQuality: number;
  temperature: number;
  audio: number;
  display: number;
  lighting: number;

  constructor() {
    this.airQuality = 72;
    this.temperature = 21;
    this.audio = 2;
    this.display = 10;
    this.lighting = 32;
  }

  ngOnInIt() { }
}
