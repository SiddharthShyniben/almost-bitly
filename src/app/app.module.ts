import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

@NgModule({
	  declarations: [
		  AppComponent,
    HomeComponent,
    RedirectComponent,
    StatisticsComponent
	  ],
	  imports: [
		  BrowserModule,
		  AppRoutingModule,
		  FormsModule
	  ],
	  providers: [],
	  bootstrap: [AppComponent]
})
export class AppModule { }
