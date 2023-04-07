import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product$!: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {}

  ngOnInit() {
    // paramMap is an observable
    // which is needed to update content when/if the routes change
    // while the component is already rendered
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getProduct(params.get('id')!))
    );
  }

  gotoProducts(product: Product) {
    const productId = product ? product.id : null;
    // Pass along the product id if available
    // so that the ProductList component can select that product.
    this.router.navigate(['/products', { id: productId }]);
  }

}
