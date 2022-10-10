import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HotToastModule } from '@ngneat/hot-toast';
import {
  FancyTitleComponent,
  LoadingSpinnerComponent,
  SearchBarComponent,
  TabComponent,
  TabContainerComponent,
  TextareaComponent,
  TextfieldComponent,
} from './components';
import { ModalComponent } from './components/modal';
// import { AutocompleteComponent } from './components/forms/autocomplete/autocomplete.component';

const COMPONENTS = [
  LoadingSpinnerComponent,
  SearchBarComponent,
  FancyTitleComponent,
  TabComponent,
  TabContainerComponent,
  TextareaComponent,
  TextfieldComponent,
  ModalComponent,
  // AutocompleteComponent,
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
  exports: [...COMPONENTS, HotToastModule],
})
export class ComponentsModule {}
