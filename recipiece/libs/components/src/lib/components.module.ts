import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent, NavDrawerComponent } from './components';

const COMPONENTS = [NavBarComponent, NavDrawerComponent];

@NgModule({
  imports: [CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
