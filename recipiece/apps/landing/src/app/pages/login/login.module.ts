import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiModule } from '@recipiece/api';
import { ComponentsModule } from '@recipiece/components';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ApiModule,
    ComponentsModule,
  ],
})
export class LoginModule {}
