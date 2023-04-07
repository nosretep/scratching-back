import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'new-product-form',
    templateUrl: './new-product-form.component.html',
    styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent {

    constructor(
        private service: ProductService,
        private modalService: NgbModal
    ) { }
    @Output("updateProductList") updateProductList: EventEmitter<any> = new EventEmitter();
    public open(modal: any): void {
        this.modalService.open(modal);
    }

    model = {
        name: ''
    }

    async onSubmit(form: NgForm) {
        // TODO: Add error handling
        this.service.createProduct(this.model).subscribe();
        // Close modal
        this.modalService.dismissAll();
        // Reset form
        form.reset();
        // Reset product data for form
        this.newProduct();
        // Update list
        await new Promise(f => setTimeout(f, 250));
        this.updateProductList.emit();
    }

    newProduct() {
        this.model = {
            name: ''
        }
    }
}