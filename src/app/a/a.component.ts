import { Component } from '@angular/core'; //imports component decorator from angular

@Component({//define the component 
  selector: 'app-a',//selector to use this in html (<app-a></app-a>)
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

}
