import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'recipiece-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() searchTerm: string;
  @Output() searchTermChange: EventEmitter<string>;

  constructor() { 
    this.searchTermChange = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public onSearchTermChange(newTerm: string) {
    this.searchTerm = newTerm;
    this.searchTermChange.emit(this.searchTerm);
  }

}
