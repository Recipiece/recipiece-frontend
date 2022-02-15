import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipe, IRecipeQuery, RecipesService } from '@recipiece/api';
import { of, ReplaySubject, Subject, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'recipiece-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public loading: boolean;
  public $recipes: Subject<IRecipe[]> = new ReplaySubject();
  public currentQuery: IRecipeQuery | undefined;
  private loadSubject: Subscription;

  constructor(
    private recipeService: RecipesService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;

    this.loadSubject = this.activeRoute.params
      .pipe(
        switchMap((params) => {
          if (params.cookbookId) {
            return of({ data: [] });
          } else {
            return this.recipeService.listForUser(this.currentQuery);
          }
        })
      )
      .subscribe({
        next: (results) => {
          this.$recipes.next(results.data);
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
        },
      });
  }

  ngOnDestroy(): void {
    this.loadSubject?.unsubscribe();
  }
}
