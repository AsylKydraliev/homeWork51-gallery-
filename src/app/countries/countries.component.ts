import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  @Input() CountryName = 'USA';
  @Input() CountryUrl = 'https://img4.goodfon.ru/wallpaper/nbig/a/3d/tampa-florida-united-states-of-america-usa-skyscrapers-build.jpg';
}
