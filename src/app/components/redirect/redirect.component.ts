import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,} from '@angular/router';
import {GenerateService} from 'src/app/services/generate.service';

type DBResult = {
	  total: number;
	  documents: Array<{url: string}>;
}

@Component({
	  selector: 'app-redirect',
	  templateUrl: './redirect.component.html',
	  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
	  failed = false;

	  constructor(private route: ActivatedRoute, private generateService: GenerateService) { }

	  ngOnInit(): void {
		  const hash = this.route.snapshot.params['hash'];
		  this.generateService.getRedirect(hash, true).subscribe(result => {
			  if ((result as DBResult).total > 0) {
				  const link = (result as DBResult).documents[0].url;
				  window.location.assign(link);
			  } else {
				  this.failed = true;
			  }
		  })
	  }
}

