import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RemoteEntryRoutingModule } from './entry-routing.module';
import { RemoteEntryComponent } from './entry.component';


@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, RemoteEntryRoutingModule],
  providers: [],
})
export class RemoteEntryModule {}
