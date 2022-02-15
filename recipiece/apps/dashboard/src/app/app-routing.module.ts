import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
      }
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {}