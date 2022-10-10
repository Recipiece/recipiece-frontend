import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'recipiece-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() title: string;
  public showing: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showing = false;
  }

}
