import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  customId = 'my-custom-div-id';
  customClass = 'background-info';
  constructor() { }

  ngOnInit() {
  }
  sayHello() {
    alert('Hello hi bye bye !!');
  }

  captureEvent(event) {
    if (event.altKey) {
    console.log(event);
    } else {
        console.log('Only works with alt');
    }
}

}
