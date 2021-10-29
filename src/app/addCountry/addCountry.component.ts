import {Component} from '@angular/core';

@Component({
  selector: 'app-addCountry',
  templateUrl: './addCountry.component.html',
  styleUrls: ['./addCountry.component.css']
})
export class AddCountryComponent {
  CountryName = '';
  CountryUrl = '';
  showForm = false;
  countries = [
    {CountryName: 'USA', CountryUrl: 'https://img4.goodfon.ru/wallpaper/nbig/a/3d/tampa-florida-united-states-of-america-usa-skyscrapers-build.jpg'},
    {CountryName: 'Malaysia', CountryUrl: 'https://files.tpg.ua/pages2/191070/Malaysia_main.jpg'},
    {CountryName: 'Dubai', CountryUrl: 'https://www.flydubai.com/ru/media/Dubai-marina-710x473_tcm10-163858_w710.jpg'},
  ];

  onAddCountry(event: Event) {
    event.preventDefault();
    this.countries.push({
      CountryName: this.CountryName,
      CountryUrl: this.CountryUrl
    });
    this.reset();
  }

  onPassword (event: Event) {
    const target = <HTMLInputElement>event.target;

    if(target.value === '123'){

    }
  }

  formIsEmpty() {
    return this.CountryName === '' || this.CountryUrl === '';
  }

  reset () {
    this.CountryName = '';
    this.CountryUrl = '';
  }
}

