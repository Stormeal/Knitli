import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading$ = this.loader.loading$;
  title = 'Knitli';

  constructor(public loader: LoadingService, private http: HttpClient) {}

  fetchUser() {
    this.http.get('https://api.github.com/users/stormeal').subscribe((res) => {
      console.log(res);
    });
  }
}
