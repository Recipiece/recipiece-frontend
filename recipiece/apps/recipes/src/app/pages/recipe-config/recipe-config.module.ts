import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeConfigRoutingModule } from './recipe-config-routing.module';
import { RecipeConfigComponent } from './recipe-config.component';


@NgModule({
  declarations: [
    RecipeConfigComponent
  ],
  imports: [
    CommonModule,
    RecipeConfigRoutingModule
  ]
})
export class RecipeConfigModule { }
