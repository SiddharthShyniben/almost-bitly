import { Component } from '@angular/core';
import { GenerateService } from 'src/app/services/generate.service';
import {environment} from 'src/environments/environment';

@Component({
	  selector: 'app-home',
	  templateUrl: './home.component.html',
	  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	  title = 'almost-bitly';
	  url = '';
	  done = false;
	  urlHash = '';
	  statsHash = '';
	  root = environment.root;

	  constructor(private generateService: GenerateService) {}

	  onSubmit() {
		  this.generateService.createLink(this.url).subscribe(data => {
			  this.urlHash = data['id'];
			  this.statsHash = data.$id;
			  this.done = true;
		  });
	  }

}
