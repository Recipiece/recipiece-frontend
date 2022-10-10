import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'recipiece-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextfieldComponent),
      multi: true,
    },
  ],
})
export class TextfieldComponent implements OnInit, ControlValueAccessor {
  public formValue: string;
  @Input() maxChars: number | undefined;
  @Input() placeholder: string = '';
  @Input() required: boolean = true;
  @Input() name: string;

  private propagateChange = (_: any) => {};

  constructor() {
    this.formValue = '';
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
