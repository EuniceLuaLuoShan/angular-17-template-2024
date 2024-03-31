import { NgModule } from '@angular/core';
import { TitleComponent } from './title.component';


const components = [
  TitleComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class TitleModule { }