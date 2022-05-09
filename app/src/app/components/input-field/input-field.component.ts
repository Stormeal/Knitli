import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'knit-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() inputName = 'Placeholder';
  @Input() inputType = 'Text';
  @Input() inputId = '';



  constructor() { }

  ngOnInit(): void {
  }

}
