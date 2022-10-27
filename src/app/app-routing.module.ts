import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
	  {path: 'g/:hash', component: RedirectComponent},
	  {path: 's/:hash', component: StatisticsComponent},
	  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
