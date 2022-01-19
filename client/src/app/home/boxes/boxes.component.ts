import { Component, OnInit } from '@angular/core';
import { faMagic, faGem, faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss'],
})
export class BoxesComponent implements OnInit {
  faMagic = faMagic;
  faRocket = faRocket;
  faGem = faGem;

  constructor() {}

  ngOnInit(): void {}
}
