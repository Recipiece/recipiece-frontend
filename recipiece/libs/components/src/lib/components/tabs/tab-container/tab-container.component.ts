import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'recipiece-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss'],
})
export class TabContainerComponent implements OnInit, AfterViewInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Output() tabSelected: EventEmitter<number>;
  @Input() selectedClass: string;

  public viewInit: boolean;
  public titles: string[];
  public selectedIndex: number;

  constructor() {
    this.tabSelected = new EventEmitter();
  }

  ngOnInit(): void {
    this.viewInit = false;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.titles = this.tabs.map((t) => t.title);
      this.selectedIndex = 0;
      this.displayTab(this.selectedIndex);
      this.viewInit = true;
    });
  }

  public handleTabSelected(index: number) {
    this.selectedIndex = index;
    this.displayTab(this.selectedIndex);
    this.tabSelected.emit(index);
  }

  private displayTab(index: number) {
    this.tabs.forEach((t, i) => {
      t.showing = i === index;
    });
  }
}
