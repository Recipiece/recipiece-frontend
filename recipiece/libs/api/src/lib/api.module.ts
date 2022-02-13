import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService, UserService } from './api';

@NgModule({
  imports: [CommonModule],
  providers: [SessionService, UserService],
})
export class ApiModule {}
