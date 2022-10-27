import {Injectable} from '@angular/core';
import {Client, Databases, Query} from 'appwrite';
import {from} from 'rxjs';

const DB_ID = '634fd126d4e38eb8e87b';
const CL_ID = '634fd12df1885e58f21a';

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
		  return from(this.db.createDocument(DB_ID, CL_ID, stats, {url, id}));
	  }

	  getRandomId() {
		  return '.......'.replace(/\./g, () => {
			  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
			  const chars = alphabet + alphabet.toUpperCase() + '1234567890_-';
			  return chars[Math.floor(Math.random() * chars.length)];
		  })
	  }

	  getRedirect(hash: string, update = false) {
		  return from(new Promise((resolve, reject) => {
			  const link = this.db.listDocuments(
				  DB_ID, CL_ID,
				  [Query.equal(update ? 'id' : '$id', hash)]
			  );

			  link.then(res => {
				  if (res.documents.length && update) this.db.updateDocument(DB_ID, CL_ID, res.documents[0].$id, {hits: res.documents[0]['hits'] + 1});
				  resolve(res)
			  }).catch(reject);
		  }))
	  }
}
