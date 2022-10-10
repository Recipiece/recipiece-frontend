import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipe, RecipesService } from '@recipiece/api';
import { switchMap } from 'rxjs';

@Component({
  selector: 'recipiece-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss'],
})
export class RecipeViewComponent implements OnInit {
  public recipe: IRecipe;
  public loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          const recipeId = params.get('recipeId');
          return this.recipeService.get(recipeId);
        })
      )
      .subscribe({
        next: (recipe: IRecipe) => {
          this.recipe = recipe;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
