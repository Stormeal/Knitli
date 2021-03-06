import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  sticky: boolean = true;
  menuHidden: boolean = false;
  faBars = faBars;
  element = window.document;

  @ViewChild('myTarget') myTarget: any;

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: any) {
    const clickedInside = this.myTarget.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.menuHidden = false;
      this.changeIcon();
    }
  }

  constructor() {}

  ngOnInit(): void {}

  toggleMenu($event: Event) {
    $event.stopPropagation();
    this.menuHidden = !this.menuHidden;
    this.changeIcon();
  }

  changeIcon() {
    if (this.faBars === faTimes) {
      this.faBars = faBars;
    } else {
      this.faBars = faTimes;
    }
  }

  ScrollIntoView(element: string) {
    console.log(element);

    this.element
      .querySelector(element)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
