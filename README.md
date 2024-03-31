# Angular17Template2024

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.


## Development server using mock
Next to `src` folder at the root level also exists `mock-server` directory, which contains `ng-apimock` server to run locally and JSON with mocked data grouped inside `./mock-server/mocks/`.
Run `npm run mock-server` for a dev mock BE server. Navigate to `http://localhost:9999/dev-interface/#/`. You are able to access the full list of available endpoints or to change response options.

Run `npm run start:mocks` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files while calling mock-server API.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
