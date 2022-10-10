import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecipeSection } from '@recipiece/api';

@Component({
  selector: 'recipiece-section-config-header',
  templateUrl: './section-config-header.component.html',
  styleUrls: ['./section-config-header.component.scss'],
})
export class SectionConfigHeaderComponent implements OnInit {
  @Input() section: IRecipeSection;
  @Input() sectionIndex: number;
  @Input() numberOfSections: number;
  @Input() hiddenSections: boolean[];
  @Output() hideSectionToggled: EventEmitter<void>;
  @Output() sectionRemoved: EventEmitter<void>;

  constructor() {
    this.hideSectionToggled = new EventEmitter();
    this.sectionRemoved = new EventEmitter();
  }

  ngOnInit(): void {}

  public toggleSectionHidden() {
    this.hideSectionToggled.emit();
  }

  public removeSection() {
    this.sectionRemoved.emit();
  }
}
