import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'recipiece-fancy-title',
  templateUrl: './fancy-title.component.html',
  styleUrls: ['./fancy-title.component.scss']
})
export class FancyTitleComponent implements OnInit {
  @Input() color?: 'primary' | 'secondary' | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
