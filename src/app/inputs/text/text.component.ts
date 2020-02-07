import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './app.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
