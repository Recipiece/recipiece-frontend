import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account.component';
import { ComponentsModule } from '@recipiece/components';
import { ApiModule } from '@recipiece/api';
import { FormsModule } from '@angular/forms';
import { VerifyAccountComponent } from './verify-account/verify-account.component';


@NgModule({
  declarations: [
    CreateAccountComponent,
    VerifyAccountComponent
  ],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    ComponentsModule,
    ApiModule,
    FormsModule,
  ]
})
export class CreateAccountModule { }
