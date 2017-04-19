import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';

import { StarComponent }         from './star.component';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    CommonModule,
    FormsModule,
    PageNotFoundComponent,
    StarComponent
  ],
  declarations: [ ]
})
export class SharedModule { }
