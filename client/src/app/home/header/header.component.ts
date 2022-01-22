import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as AOS from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
