import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@recipiece/components';
import { RemoteEntryRoutingModule } from './entry-routing.module';
import { RemoteEntryComponent } from './entry.component';


@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RemoteEntryRoutingModule,
  ],
  providers: [],
})
export class RemoteEntryModule {}
