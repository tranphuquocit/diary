import { Component } from '@angular/core';

@Component({
  selector: 'diary-sam',
  templateUrl: 'sam.component.html',
  styleUrls: ['sam.component.scss']
})
export class SamComponent {
  point1: number = 0;
  point2: number = 0;
  point3: number = 0;
  point4: number = 0;
  point5: number = 0;
  times: any = [];
  constructor() {
    this.times = Array(50).fill([]).map((x,i)=>i); // [0,1,2,3,4]
  }
  timesInput = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0
  }
  inputPoint1(input) {
    this.timesInput.a = +input;
    if(input == 0) {
      this.timesInput.a = this.timesInput.b + this.timesInput.c + this.timesInput.d + this.timesInput.e
      this.point1 = this.point1 + this.timesInput.a;
    } else {      
      this.point1 = this.point1 - input;
    }
  }
  inputPoint2(input) {
    this.timesInput.b = +input;
    if(input == 0) {
      this.timesInput.b = this.timesInput.a + this.timesInput.c + this.timesInput.d + this.timesInput.e
      this.point2 = this.point2 + this.timesInput.b
    } else {
      this.point2 = this.point2 - input;
    }
  }
  inputPoint3(input) {
    this.timesInput.c = +input;
    if(input == 0) {
      this.timesInput.c = this.timesInput.a + this.timesInput.b + this.timesInput.d + this.timesInput.e
      this.point3 = this.point3 + this.timesInput.c
    } else {
      this.point3 = this.point3 - input;
    }
  }
  inputPoint4(input) {
    this.timesInput.d = +input;
    if(input == 0) {
      this.timesInput.d = this.timesInput.a + this.timesInput.b + this.timesInput.c + this.timesInput.e
      this.point4 = this.point4 + this.timesInput.d
    } else {
      this.point4 = this.point4 - input;
    }
  }
  inputPoint5(input) {
    this.timesInput.e = +input;
    if(input == 0) {
      this.timesInput.e = this.timesInput.a + this.timesInput.b + this.timesInput.c + this.timesInput.d
      this.point5 = this.point5 + this.timesInput.e
    } else {
      this.point5 = this.point5 - input;
    }
  }
}
