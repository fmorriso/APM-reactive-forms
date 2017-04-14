import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { ProductComponent }      from './product.component';
import { ProductEditComponent}   from './product-edit.component';
import { ProductEditGuard}       from './product-edit.guard';
import { ProductDetailComponent} from './product-detail.component';
import { ProductDetailGuard}     from './product-detail.guard';
import { ProductListComponent}   from './product-list.component';

const routes: Routes = [
  { path: 'products',
    component: ProductListComponent,
    children :[
      {
        path: '',
        component: ProductListComponent}
      ,
      {
        path: 'product/:id',
        canActivate: [ ProductDetailGuard],
        component: ProductDetailComponent
      }
      ,
      { path: 'productEdit/:id',
        canDeactivate: [ ProductEditGuard ],
        component: ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule {}

// Do **NOT** put the "guard" items in the following list:
export const routedComponents = [
  ProductComponent,
  ProductEditComponent,
  ProductDetailComponent,
  ProductListComponent
];
