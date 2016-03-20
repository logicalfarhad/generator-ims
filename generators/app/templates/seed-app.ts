import {Component} from 'angular2/core';
@Component({
  selector: 'seed-app',
  template: `<h1>{{title}}!!!!</h1>`,
  styleUrls: ["app/Site.css"]
})
export class SeedApp {
  public title = 'Tour of Heroes';
}
