import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from '@recipiece/api';

@Component({
  selector: 'recipiece-recipe-ingredients-view',
  templateUrl: './recipe-ingredients-view.component.html',
  styleUrls: ['./recipe-ingredients-view.component.scss'],
})
export class RecipeIngredientsViewComponent implements OnInit {
  @Input() recipe: IRecipe;
  public ingredientCheckedMap: { [key: string]: boolean };

  constructor() {}

  ngOnInit(): void {
    this.ingredientCheckedMap = {};
    this.recipe.sections.forEach((section, sectionIndex) => {
      section.ingredients.forEach((_, ingIndex) => {
        this.ingredientCheckedMap[this.getIngredientCheckKey(sectionIndex, ingIndex)] = false;
      });
    });
  }

  public getIngredientCheckKey(sectionIndex: number, ingIndex: number): string {
    return `${(sectionIndex + 1) * (ingIndex + 1)}`;
  }

  public isIngredientChecked(sectionIndex: number, ingIndex: number): boolean {
    return this.ingredientCheckedMap[this.getIngredientCheckKey(sectionIndex, ingIndex)];
  }

  public setIngredientChecked(sectionIndex: number, ingIndex: number, checked: boolean) {
    this.ingredientCheckedMap[this.getIngredientCheckKey(sectionIndex, ingIndex)] = checked;
  }

  public toggleIngredientChecked(sectionIndex: number, ingIndex: number) {
    console.log(ingIndex);
    this.setIngredientChecked(
      sectionIndex,
      ingIndex,
      !this.ingredientCheckedMap[this.getIngredientCheckKey(sectionIndex, ingIndex)],
    );
  }
}
