import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component'; 
//imports child components to be used in this component

@Component({
  selector: 'app-root',// Defines the custom HTML tag <app-root> as the root component
  imports: [RouterOutlet, AComponent,BComponent],
  templateUrl: './app.component.html',// Path to the component’s HTML template
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-two-components';
}
