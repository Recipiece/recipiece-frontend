import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@recipiece/components';
import { RecipeConfigRoutingModule } from './recipe-config-routing.module';
import { RecipeConfigComponent } from './recipe-config.component';
import { ApiModule } from '@recipiece/api';
import { BasicsConfigComponent } from './basics-config/basics-config.component';
import { IngredientsConfigComponent } from './ingredients-config/ingredients-config.component';
import { StepsConfigComponent } from './steps-config/steps-config.component';
import { FormsModule } from '@angular/forms';
import { SectionConfigHeaderComponent } from './section-config-header/section-config-header.component';


@NgModule({
  declarations: [
    RecipeConfigComponent,
    BasicsConfigComponent,
    IngredientsConfigComponent,
    StepsConfigComponent,
    SectionConfigHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    ApiModule,
    RecipeConfigRoutingModule
  ]
})
export class RecipeConfigModule { }
