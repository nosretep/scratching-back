import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { FormsModule } from '@angular/forms';
import { ProfileNavComponent } from './nav/profile-nav/profile-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileNavComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
