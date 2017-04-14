import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
// import {ProductListComponent} from './products/product-list.component';
// import {ProductComponent} from './products/product.component';
// import {ProductDetailComponent} from './products/product-detail.component';
// import {ProductEditComponent} from './products/product-edit.component';
import {PageNotFoundComponent} from './shared/page-not-found.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
//   ProductComponent,
//   ProductDetailComponent,
// ProductEditComponent,
// PageNotFoundComponent
export const routableComponents = [
  WelcomeComponent
];
