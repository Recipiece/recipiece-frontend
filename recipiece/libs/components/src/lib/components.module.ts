import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HotToastModule } from '@ngneat/hot-toast';
import { SpinnerCircularModule } from 'spinners-angular/spinner-circular';
import {
  LoadingSpinnerComponent
} from './components';
import { FancyTitleComponent } from './components/fancy-title';
import { SearchBarComponent } from './components/search-bar';

const COMPONENTS = [
  LoadingSpinnerComponent,
  SearchBarComponent,
  FancyTitleComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HotToastModule.forRoot({
      position: 'bottom-center',
      dismissible: true,
    }),
    RouterModule,
  ],
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS,
    HotToastModule,
  ],
})
export class ComponentsModule {}
