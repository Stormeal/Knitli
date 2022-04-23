import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'knit-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() title = 'Dropdown Title';
  @Input() icon = '';
  image: Boolean = true;
  dropdownExpanded: Boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.renderIcon();
  }
  renderIcon() {
    if (this.icon) {
      this.image = false;
    }
  }
  expandDropdown() {
    this.dropdownExpanded = !this.dropdownExpanded;
  }
}
