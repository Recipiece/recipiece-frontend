import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '@recipiece/components';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  ApiModule,
  PreventLoggedInGuard,
  PreventNotLoggedInGuard,
} from '@recipiece/api';
import { NavDrawerComponent } from './components/nav-drawer/nav-drawer.component';

@NgModule({
  declarations: [AppComponent, NavDrawerComponent],
  imports: [
    BrowserModule,
    ApiModule,
    ComponentsModule,
    RouterModule.forRoot(
      [
        {
          path: 'landing',
          canActivate: [PreventLoggedInGuard],
          loadChildren: () =>
            import('landing/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'dashboard',
          canActivate: [PreventNotLoggedInGuard],
          loadChildren: () =>
            import('dashboard/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'shopping',
          loadChildren: () =>
            import('shopping/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'account',
          loadChildren: () =>
            import('account/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'recipes',
          loadChildren: () =>
            import('recipes/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
