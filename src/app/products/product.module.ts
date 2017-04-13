import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData }  from './product-data';


import {ProductListComponent} from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';

import { ProductDetailGuard } from './product-detail.guard';
import { ProductEditGuard } from './product-edit.guard';

import {SharedModule} from '../shared/shared.module';
import {ProductService} from './product.service';
import { ProductEditComponent } from './product-edit.component';
import { ProductDetailComponent } from './product-detail.component';


@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        canActivate: [ ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'productEdit/:id',
        canDeactivate: [ ProductEditGuard ],
        component: ProductEditComponent },
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductFilterPipe,
    ProductEditComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService,
    ProductDetailGuard,
    ProductEditGuard
  ]
})
export class ProductModule { }
