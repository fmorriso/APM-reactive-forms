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


@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductListComponent,
    ProductFilterPipe,
    ProductEditComponent
  ],
  providers: [
    ProductService,
    ProductDetailGuard,
    ProductEditGuard
  ]
})
export class ProductModule { }
