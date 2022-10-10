import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'recipiece-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() public visible: boolean = false;
  @Output() focusLost: EventEmitter<void>;

  constructor() { 
    this.focusLost = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public onFocusLost() {
    this.focusLost.emit()
  }

  public preventFocusLost(event: any) {
    event.stopPropagation();
  }

}
