import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeViewRoutingModule } from './recipe-view-routing.module';
import { RecipeViewComponent } from './recipe-view.component';


@NgModule({
  declarations: [
    RecipeViewComponent
  ],
  imports: [
    CommonModule,
    RecipeViewRoutingModule
  ]
})
export class RecipeViewModule { }
