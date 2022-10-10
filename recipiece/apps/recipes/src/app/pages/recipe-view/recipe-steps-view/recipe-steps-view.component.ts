import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from '@recipiece/api';

@Component({
  selector: 'recipiece-recipe-steps-view',
  templateUrl: './recipe-steps-view.component.html',
  styleUrls: ['./recipe-steps-view.component.scss']
})
export class RecipeStepsViewComponent implements OnInit {
  @Input() recipe: IRecipe;

  constructor() { }

  ngOnInit(): void {
  }

}
