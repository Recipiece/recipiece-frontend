import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAccountComponent,
  },
  {
    path: 'verify',
    component: VerifyAccountComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAccountRoutingModule {}
