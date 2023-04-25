import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './insecure/page-not-found/page-not-found.component';
import { WelcomePageComponent } from './insecure/welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent, pathMatch: 'full'},
  { path: '',   redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      // ,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}