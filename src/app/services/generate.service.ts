import {Injectable} from '@angular/core';
import {Client, Databases} from 'appwrite';
import {from} from 'rxjs';

@Injectable({
	  providedIn: 'root'
})
export class GenerateService {
	  client!: Client;
	  db!: Databases;
	  constructor() {
		  this.client = new Client()
			  .setEndpoint('http://localhost/v1')
			  .setProject('almost-bitly');
		  this.db = new Databases(this.client);
	  }

	  createLink(url: string) {
		  const id = this.getRandomId();
		  const stats = this.getRandomId() + this.getRandomId();
		  return from(this.db.createDocument('634fd126d4e38eb8e87b', '634fd12df1885e58f21a', stats, {url, id}));
	  }

	  getRandomId() {
		  return '.......'.replace(/\./g, () => {
			  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
			  const chars = alphabet + alphabet.toUpperCase() + '1234567890_-';
			  return chars[Math.floor(Math.random() * chars.length)];
		  })
	  }
}
