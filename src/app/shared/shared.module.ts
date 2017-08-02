import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {StarComponent} from './star.component';
// ERROR in Can't export directive PageNotFoundComponent in C:/projects/APM-reactive-forms/src/app/shared/page-not-found.component.ts from SharedModule in C:/projects/APM-reactive-forms/src/app/shared/shared.module.ts as it was neither declared nor imported!
import {PageNotFoundComponent} from './page-not-found.component';


@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		CommonModule,
		FormsModule,
		StarComponent,
		PageNotFoundComponent
	],
	declarations: [StarComponent, PageNotFoundComponent],
})
export class SharedModule {
}
