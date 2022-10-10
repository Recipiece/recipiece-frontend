import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecipe } from '@recipiece/api';

@Component({
  selector: 'recipiece-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: IRecipe;
  @Output() viewed: EventEmitter<IRecipe>;
  @Output() edited: EventEmitter<IRecipe>;

  constructor() { 
    this.viewed = new EventEmitter();
    this.edited = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public onEdit() {
    this.edited.emit(this.recipe);
  }

  public onView() {
    this.viewed.emit(this.recipe);
  }

}
