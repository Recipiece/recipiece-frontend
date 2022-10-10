import { Component, OnInit } from '@angular/core';
import { ConfigListComponent } from '../config-list-component';

@Component({
  selector: 'recipiece-ingredients-config',
  templateUrl: './ingredients-config.component.html',
  styleUrls: ['./ingredients-config.component.scss'],
})
export class IngredientsConfigComponent extends ConfigListComponent implements OnInit {
  ngOnInit(): void {}

  public addIngredient(sectionIndex: number) {
    this.recipe.sections[sectionIndex].ingredients.push({
      content: '',
      ordinal: this.recipe.sections[sectionIndex].ingredients.length,
    });
  }

  public removeIngredient(sectionIndex: number, ingIndex: number) {
    this.recipe.sections[sectionIndex].ingredients = this.recipe.sections[sectionIndex].ingredients.filter(
      (_, idx) => idx !== ingIndex,
    );
  }
}
