import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'recipiece-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements OnInit, ControlValueAccessor {
  public formValue: string;

  @Input() maxChars: number | undefined;
  @Input() placeholder: string = '';
  @Input() rows: number = 10;
  @Input() cols: number = 10;
  @Input() resizable: boolean = false;
  @Input() required: boolean = true;
  @Input() name: string;

  private propagateChange = (_: any) => {};

  constructor() {
    
  }

  writeValue(obj: any): void {
    if (obj !== null && obj !== undefined) {
      this.formValue = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit(): void {}
}
