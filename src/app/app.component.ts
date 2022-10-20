import {Component} from '@angular/core';
import { GenerateService } from './services/generate.service';

@Component({
	  selector: 'app-root',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.css']
})
export class AppComponent {
	  title = 'almost-bitly';
	  url = '';
	  done = false;
	  urlHash = '';
	  statsHash = '';

	  constructor(private generateService: GenerateService) {}

	  onSubmit() {
		  this.generateService.createLink(this.url).subscribe(data => {
			  this.urlHash = data['id'];
			  this.statsHash = data.$id;
			  this.done = true;
		  });
	  }
}
