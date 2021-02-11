import { Component } from '@angular/core';
import { google } from '@google/maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Google Maps';

  lat = 44.5375;
  lng = 18.6735;

}
