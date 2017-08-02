# APM-Reactive-Forms

## CURRENTLY BROKEN

As of August 2, 2017, the Edit Product and Add Product sections of this application do not work.

Something changed in either Angular 4.3.2 and/or Angular-CLI 1.2.6 that causes the Page Not Found to kick in when either of those functions is attempted.

If anyone has any insights on why this happens, please let me know.

## Credit
The code you see here was first developed by the world-famous developer, Deborah Kurata for her Pluralsight course, Angular2 - Reactive Forms.

All I did was adapt it to use my favorite tools, which are listed below.

## Tools Used

This project was generated with:
* [Angular-cli](https://github.com/angular/angular-cli) version 1.0.0.
* [Angular 4.0.1](https://angular.io)
* [npm-check-updates](https://github.com/tjunnone/npm-check-updates)
* [TypeScript 2.2.2 for Visual Studio 2015 (works for 2017 too)](https://www.microsoft.com/en-us/download/details.aspx?id=48593)
* TypeScript 2.2.2 - (comes along for the ride if you create the project as shown below)
* [WebStorm](http://www.jetbrains.com/webstorm) 2017.1.1-EAP

## How I created the application
 ```
 cd c:\projects\
 ng new APM-reactive-forms --verbose --skip-install --style=css --routing
 cd APM-reactive-forms
 ncu -a
 npm install
 ```   
 The above does the following:
 * Positions to my projects folder
 * Uses angular-cli's `ng new` command to create the project __but does not automatically run `npm install`__ (due to the use of `--skip-install`).  It also specifies the `--routing` flag that insures that the angular application will support routing right from the beginning without having to put it in later (with all the extra work that requires)
 * Uses npm-check-updates `ncu -a` command to update all packages in package.json to the latest editions
 * Runs the previously bypassed `npm install` 

Side note: I have a PowerShell script called `New-NgProject.ps1` that does all of the above for me - all I do is change the name of the project.
## package.json changes
### Integrating Bootstrap 3.3.7
I installed Bootstrap 3.3.7 via:
```
npm install -S bootstrap
```
To make angular-cli aware that Bootstrap 3.3.7 needs to be injected (via WebPack), I modified `.angular-cli.json` as follows:
```
      "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ],
```
### Adding angular language-service
I added the angular language-service to package.json via:
```
npm install -D @angular/language-service
```
Notice that it is only needed in `devDependencies`. 
### npm scripts
I like to modify and augment the default npm scripts that `ng new` provides by modifying package.json to add/update the following:
```
    "build": "ng build --progress --verbose --vendor-chunk --extract-css",
    "build-prod": "ng build --progress --verbose --vendor-chunk --extract-css --prod",
    "start": "ng serve --output --verbose --vendor-chunk --extract-css",
    "start-prod": "ng serve --output --verbose --vendor-chunk --extract-css --prod",
```
The reason for making the above changes/additions:
* I like the CSS in its own separate file that is brought into index.html separately as part of the header of the HTML.
* I like the vendor "stuff" in it's own webpack'ed file.
* I like `--verbose` output to help me track down build and/or serve errors.
## Changes due to use of angular-cli
The changes I made due to using angular-cli `ng generate` are listed below:
## Welcome component instead of Home component
This is because `ng generate component Welcome` generates the same files as Deborah's original, just under the different directory, one that matches the component name.
## logo.jpg `<img>` reference path change
In order to get the `logo.jpg` file to show up on the Welcome page, I had to change the `<img>` tag to this path:
```
    <div class="row">
      <img src="../../assets/images/logo.jpg"
           class="img-responsive center-block logo"
      />
    </div>
```
You'll also notice that I moved the inline CSS in Deborah's original code to a separate custom CSS class, ```logo``` defined inside welcome.component.css as:
```
.logo {
  max-height: 300px;
  padding-bottom: 50px
}
```
Since angular-cli automatically generates a `welcome.component.css` file and references it in the corresponding `welcome.component.ts` file, I figured *why not put custom CSS in the place where angular-cli automatically provided for me?*

## Making subcomponents into Angular Modules

[ngModules](https://angular.io/docs/ts/latest/guide/ngmodule.html)

[ngModule FAQS](https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-what-to-export)

## 2017-08 Errors under Angular 4.3.2 + Angular-CLI 1.2.6

I am not sure how to fix these errors that only happen when I use the prod option when building:
They started happening right after I upgraded to Angular-CLI 1.2.6 and Angular 4.3.2

```
ng build --prod
```

ERROR in Type StarComponent in C:/projects/APM-reactive-forms/src/app/shared/star.component.ts is part of the declarations of 2 modules: SharedModule in C:/projects/APM-reactive-forms/src/app/shared/shared.module.ts and AppModule in C:/projects/APM-reactive-forms/src/app/app.module.ts! Please consider moving StarComponent in C:/projects/APM-reactive-forms/src/app/shared/star.component.ts to a higher module that imports SharedModule in C:/projects/APM-reactive-forms/src/app/shared/shared.module.ts and AppModule in C:/projects/APM-reactive-forms/src/app/app.module.ts. You can also create a new NgModule that exports and includes StarComponent in C:/projects/APM-reactive-forms/src/app/shared/star.component.ts then import that NgModule in SharedModule in C:/projects/APM-reactive-forms/src/app/shared/shared.module.ts and AppModule in C:/projects/APM-reactive-forms/src/app/app.module.ts.

ERROR in Type PageNotFoundComponent in C:/projects/APM-reactive-forms/src/app/shared/page-not-found.component.ts is part of the declarations of 2 modules: 
SharedModule in C:/projects/APM-reactive-forms/src/app/shared/shared.module.ts 
and 
AppModule in C:/projects/APM-reactive-forms/src/app/app.module.ts! 
Please consider moving PageNotFoundComponent in C:/projects/APM-reactive-forms/src/app/shared/page-not-found.component.ts to a higher module
that imports SharedModule in C:/projects/APM-reactive-forms/src/app/shared/shared.module.ts 
and AppModule in C:/projects/APM-reactive-forms/src/app/app.module.ts. 
You can also create a new NgModule that exports and includes PageNotFoundComponent in C:/projects/APM-reactive-forms/src/app/shared/page-not-found.component.ts then import that NgModule in SharedModule in C:/projects/APM-reactive-forms/src/app/shared/shared.module.ts and AppModule in C:/projects/APM-reactive-forms/src/app/app.module.ts.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
