import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiModule } from '@recipiece/api';

import { ComponentsModule } from '@recipiece/components';
import { RecipeViewRoutingModule } from './recipe-view-routing.module';
import { RecipeViewComponent } from './recipe-view.component';
import { RecipeIngredientsViewComponent } from './recipe-ingredients-view/recipe-ingredients-view.component';
import { RecipeStepsViewComponent } from './recipe-steps-view/recipe-steps-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecipeViewComponent, RecipeIngredientsViewComponent, RecipeStepsViewComponent],
  imports: [CommonModule, RecipeViewRoutingModule, ComponentsModule, ApiModule, FormsModule],
})
export class RecipeViewModule {}
