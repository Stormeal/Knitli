import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading$ = this.loader.loading$;
  title = 'Knitli';

  constructor(public loader: LoadingService, private http: HttpClient) {}

  ngOnInit(): void {
    AOS.init();
  }

  fetchUser() {
    this.http.get('https://api.github.com/users/stormeal').subscribe((res) => {
      console.log(res);
    });
  }
}
