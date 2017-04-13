import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {ProductEditComponent} from './product-edit.component';

@Injectable()
export  class ProductEditGuard implements CanDeactivate<ProductEditComponent> {

  canDeactivate(component: ProductEditComponent): boolean {
    if (component.productForm.dirty) {
      const productName = component.productForm.get('productName').value || 'New Product';
      return confirm(`Navigate away and lose all changes to ${productName}?`);
    }
    return true;
  }
}
