import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GenerateService} from 'src/app/services/generate.service';

type DBResult = {
	  total: number;
	  documents: Array<{url: string, hits: number, id: string}>;
}

@Component({
	  selector: 'app-statistics',
	  templateUrl: './statistics.component.html',
	  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
	  failed = false;
	  success = false;
	  url = '';
	  hash = '';
	  hits = 0;

	  constructor(private route: ActivatedRoute, private generateService: GenerateService) { }

	  ngOnInit(): void {
		  const hash = this.route.snapshot.params['hash'];
		  this.generateService.getRedirect(hash).subscribe(result => {
			  if ((result as DBResult).total > 0) {
				  const {url, hits, id} = (result as DBResult).documents[0];
				  console.log(url, hits);
				  this.url = url;
				  this.hits = hits;
				  this.hash = id;
				  this.success = true;
			  } else {
				  this.failed = true;
			  }
		  })
	  }
}
