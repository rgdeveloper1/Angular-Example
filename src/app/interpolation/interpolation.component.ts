import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  description = 'this is app';
  flag = false;
  num = 10;
  obj = { title: 'Angular 6' };
  colors = ['White', 'Green'];
  constructor() { }

  ngOnInit() {
  }
  addNewColor() {
    this.colors.push('Blue');
  }

}
