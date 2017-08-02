import {Component, OnInit, VERSION} from '@angular/core';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

	public angularVersion: string;
	public pageTitle = 'Welcome';

	constructor() {
	}

	ngOnInit() {
		this.angularVersion = VERSION.full
	}

}
