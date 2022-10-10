import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecipe } from '@recipiece/api';

@Component({
  selector: 'recipiece-basics-config',
  templateUrl: './basics-config.component.html',
  styleUrls: ['./basics-config.component.scss'],
})
export class BasicsConfigComponent implements OnInit {
  @Input() recipe: IRecipe;
  @Output() loadedFromUrl: EventEmitter<void>;

  constructor() {
    this.loadedFromUrl = new EventEmitter();
  }

  ngOnInit(): void {}

  public loadFromUrlPressed() {
    this.loadedFromUrl.emit();
  }
}
