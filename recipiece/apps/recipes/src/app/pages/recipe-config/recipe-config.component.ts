import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe, RecipesService } from '@recipiece/api';
import { of, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'recipiece-recipe-config',
  templateUrl: './recipe-config.component.html',
  styleUrls: ['./recipe-config.component.scss'],
})
export class RecipeConfigComponent implements OnInit {
  public loading: boolean;
  public recipe: IRecipe;
  public editing: boolean;
  public hiddenSections: boolean[];
  public showLinkModal: boolean = false;
  public importUrl: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.hiddenSections = [];
    this.activatedRoute.paramMap
      .pipe(
        take(1),
        switchMap((params) => {
          const recipeId = params.get('recipeId');
          if (recipeId) {
            this.editing = true;
            return this.recipeService.get(recipeId);
          } else {
            this.editing = false;
            return of(<IRecipe>{
              name: '',
              description: '',
              sections: [
                {
                  ordinal: 0,
                  name: 'New Section',
                  ingredients: [],
                  steps: [],
                },
              ],
            });
          }
        }),
        tap((recipe) => {
          recipe.sections.forEach(() => {
            this.hiddenSections.push(false);
          });
        }),
      )
      .subscribe({
        next: (recipe) => {
          this.recipe = recipe;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        },
      });
  }

  public toggleSectionHidden(index: number) {
    this.hiddenSections[index] = !this.hiddenSections[index];
  }

  public sectionAdded() {
    this.recipe.sections.push({
      ordinal: this.recipe.sections.length,
      name: 'New Section',
      steps: [],
      ingredients: [],
    });
    this.hiddenSections.push(false);
  }

  public sectionRemoved(sectionIndex: number) {
    this.recipe.sections = this.recipe.sections.filter((_, i) => i !== sectionIndex);
    this.hiddenSections = this.hiddenSections.filter((_, i) => i !== sectionIndex);
    if (this.recipe.sections.length === 1) {
      this.hiddenSections[0] = false;
    }
  }

  public recipeSaved() {
    this.recipeService
      .save(this.recipe)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.router.navigate(['dashboard']);
        },
      });
  }

  public loadFromUrlPressed() {
    this.showLinkModal = true;
  }

  public modalFocusLost() {
    this.showLinkModal = false;
  }

  public parseRecipeFromUrl() {
    this.recipeService
      .parseFromUrl(this.importUrl)
      .pipe(
        take(1),
        tap(() => {
          this.showLinkModal = false;
          this.importUrl = '';
        }),
      )
      .subscribe({
        next: (recipe: IRecipe) => {
          this.recipe = { ...recipe };

          if (this.recipe.sections.length === 0) {
            this.recipe.sections.push({
              ordinal: this.recipe.sections.length,
              name: 'New Section',
              ingredients: [],
              steps: [],
            });
          }

          this.recipe.sections.forEach(() => {
            this.hiddenSections.push(false);
          });
          this.importUrl = '';
        },
        error: () => {
          this.importUrl = '';
        },
      });
  }
}
