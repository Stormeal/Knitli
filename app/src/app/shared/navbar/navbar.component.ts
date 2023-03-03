import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  Directive,
} from "@angular/core";
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
} from "@angular/router";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
const misc: any = {
  navbar_menu_visible: 0,
  active_collapse: true,
  disabled_collapse_init: 0,
};

declare var $: any;
@Component({
  selector: "app-navbar-cmp",
  templateUrl: "navbar.component.html",
})
export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  mobile_menu_visible: any = 0;
  private nativeElement: Node;
  private toggleButton: any;
  private _router: Subscription;

  @ViewChild("app-navbar-cmp", { static: false }) button: any;

  constructor(
    location: Location,
    private renderer: Renderer2,
    private element: ElementRef,
    private router: Router
  ) {
    this.location = location;
    this.nativeElement = element.nativeElement;
  }

  ngOnInit() {}
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }
    for (let i = 0; i < this.listTitles.length; i++) {
      if (
        this.listTitles[i].type === "link" &&
        this.listTitles[i].path === titlee
      ) {
        return this.listTitles[i].title;
      } else if (this.listTitles[i].type === "sub") {
        for (let j = 0; j < this.listTitles[i].children.length; j++) {
          let subtitle =
            this.listTitles[i].path + "/" + this.listTitles[i].children[j].path;
          // console.log(subtitle)
          // console.log(titlee)
          if (subtitle === titlee) {
            return this.listTitles[i].children[j].title;
          }
        }
      }
    }
    return "Dashboard";
  }
  getPath() {
    return this.location.prepareExternalUrl(this.location.path());
  }
}
