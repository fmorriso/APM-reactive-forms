import { NgModule }                from '@angular/core';
import { ReactiveFormsModule }     from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }    from 'angular-in-memory-web-api';
import { ProductData }             from './product-data';

import { ProductsRoutingModule, routedComponents } from './products-routing.module';

import { ProductListComponent }    from './product-list.component';

import { ProductDetailComponent }  from './product-detail.component';
import { ProductDetailGuard }      from './product-detail.guard';

import { ProductEditComponent }    from './product-edit.component';
import { ProductEditGuard }        from './product-edit.guard';

import { ProductFilterPipe }       from './product-filter.pipe';
import { ProductService }          from './product.service';

import { SharedModule }            from '../shared/shared.module';

/* ,
 ProductDetailComponent

 ,
 ProductEditComponent
*/

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    ProductsRoutingModule
  ],
  declarations: [
    routedComponents,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductDetailGuard,
    ProductEditGuard
  ]
})
export class ProductsModule { }
