import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'create-account',
        loadChildren: () =>
          import('../pages/create-account/create-account.module').then(
            (m) => m.CreateAccountModule
          ),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('../pages/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
