import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRecipe } from '@recipiece/api';

@Component({
  selector: 'recipiece-config-list-base',
  template: '',
  styles: [],
})
export abstract class ConfigListComponent {
  @Input() recipe: IRecipe;
  @Input() hiddenSections: boolean[];
  @Output() sectionHiddenToggled: EventEmitter<number>;
  @Output() sectionAdded: EventEmitter<void>;
  @Output() sectionRemoved: EventEmitter<number>;

  public constructor() {
    this.sectionAdded = new EventEmitter();
    this.sectionRemoved = new EventEmitter();
    this.sectionHiddenToggled = new EventEmitter();
  }

  public removeSection(index: number) {
    this.sectionRemoved.emit(index);
  }

  public addSection() {
    this.sectionAdded.emit();
  }

  public toggleSectionHidden(index: number) {
    this.sectionHiddenToggled.emit(index);
  }
}
