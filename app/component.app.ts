declare var Gistia: any
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './partials/app.html',
})

export class AppComponent {
  gistia: any;
  output: string;
  error: string;

  modifyInput(element, operation) {
    if (element.value === '') {
      this.error = 'You must enter an input string';
      return false;
    }
    if (!this.isJSON(element.value)){
      this.error = 'Input needs to be valid JSON';
      return false;
    }

    let input = JSON.parse(element.value);

    if (operation === 'flatten') {
      this.flatten(input);
    } else if (operation === 'unflatten') {
      this.unflatten(input);
    }
  }

  flatten(string){
    try{
      this.output = this.gistia.flatten(string);
      // this.output = JSON.stringify(result, null, 4);
    } catch(e) {
      this.error = 'There was an error flattening your JSON';
      return false;
    }
  }

  unflatten(string){
    try{
      this.output = this.gistia.unflatten(string);
      // this.output = JSON.stringify(result, null, 4);
    } catch(e) {
      this.error = 'There was an error unflattening your JSON';
      return false;
    }
  }

  isJSON(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  constructor() {
    this.gistia = new Gistia();
    this.output = '';
    this.error = '';
  }
}
