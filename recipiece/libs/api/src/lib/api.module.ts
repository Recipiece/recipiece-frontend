import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SessionService, StagedUsersService, UserService } from './api';
import { CookbooksService } from './api/cookbooks';
import { RecipesService } from './api/recipes';
import { PreventLoggedInGuard, PreventNotLoggedInGuard } from './guards';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    PreventLoggedInGuard,
    PreventNotLoggedInGuard,
    SessionService,
    UserService,
    StagedUsersService,
    RecipesService,
    CookbooksService,
  ],
})
export class ApiModule {}
