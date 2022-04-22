import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'knit-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Input() name = 'Button';
  @Input() icon = '';
  constructor() {}

  ngOnInit(): void {}
}
