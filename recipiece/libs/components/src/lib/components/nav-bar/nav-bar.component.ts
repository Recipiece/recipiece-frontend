import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'recipiece-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() showDrawerAction: boolean;
  @Output() drawerToggled: EventEmitter<boolean>;

  constructor() { 
    this.drawerToggled = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
