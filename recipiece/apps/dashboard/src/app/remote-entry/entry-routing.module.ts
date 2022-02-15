import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
          }
        ]
      },
    ]),
  ],
  exports: [
    RouterModule,
  ]
})
export class RemoteEntryRoutingModule {}