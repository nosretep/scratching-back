import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { HasPermissionsDirective } from '../directives/has-permission.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProductsRoutingModule,
    NgbModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    NewProductFormComponent,
    HasPermissionsDirective
  ]
})
export class ProductsModule {}