import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiModule } from '@recipiece/api';
import { ComponentsModule } from '@recipiece/components';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ApiModule, ComponentsModule, DashboardRoutingModule],
})
export class DashboardModule {}
