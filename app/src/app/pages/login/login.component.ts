import { Component, OnInit, ElementRef, OnDestroy } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-login-cmp",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  private toggleButton: any;
  private nativeElement: Node;

  constructor(private element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  ngOnInit() {
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");
  }
}
