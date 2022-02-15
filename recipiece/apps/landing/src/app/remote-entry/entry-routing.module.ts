import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

const routes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'create-account',
        loadChildren: () => import('../pages/create-account/create-account.module').then((m) => m.CreateAccountModule),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('../pages/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoteEntryRoutingModule {}
