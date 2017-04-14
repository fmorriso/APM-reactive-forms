import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {AppRoutingModule, routableComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

/* Feature Modules */
/* Product Module has its own route definitions, so no need to include those routes in app-routing.module */
import { ProductModule }  from './products/product.module';
import { ProductService } from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    ProductModule,
    AppRoutingModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
