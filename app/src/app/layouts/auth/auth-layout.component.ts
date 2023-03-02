import { Component, OnInit, ElementRef } from "@angular/core";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-layout",
  styleUrls: ["./auth-layout.component.scss"],
  templateUrl: "./auth-layout.component.html",
})
export class AuthLayoutComponent implements OnInit {
  mobile_menu_visible: any = 0;
  private _router: Subscription;

  constructor(public router: Router, private element: ElementRef) {}
  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
  }
}
