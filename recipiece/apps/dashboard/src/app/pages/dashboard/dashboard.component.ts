import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe, IRecipeQuery, RecipesService } from '@recipiece/api';
import { of, ReplaySubject, Subject, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'recipiece-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public loading: boolean;
  public recipes: IRecipe[];
  public currentQuery: IRecipeQuery | undefined;
  private loadSubject: Subscription;

  constructor(private recipeService: RecipesService, private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.recipes = [];

    this.loadSubject = this.activeRoute.params
      .pipe(
        switchMap((params) => {
          if (params.cookbookId) {
            return of({ data: [] });
          } else {
            return this.recipeService.list(this.currentQuery);
          }
        })
      )
      .subscribe({
        next: (results) => {
          console.log(results)
          this.recipes = results.data;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        },
      });
  }

  ngOnDestroy(): void {
    this.loadSubject?.unsubscribe();
  }

  public recipeViewed(recipe: IRecipe) {
    this.router.navigate(['recipes', 'view', recipe.id]);
  }

  public recipeEdited(recipe: IRecipe) {
    this.router.navigate(['recipes', 'config', recipe.id]);
  }
}
