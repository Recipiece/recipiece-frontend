import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

const routes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'config',
        loadChildren: () => import('../pages/recipe-config/recipe-config.module').then((m) => m.RecipeConfigModule),
      },
      {
        path: 'view/:recipeId',
        loadChildren: () => import('../pages/recipe-view/recipe-view.module').then((m) => m.RecipeViewModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoteEntryRoutingModule {}
