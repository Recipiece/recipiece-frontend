import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

const routes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoteEntryRoutingModule {}
