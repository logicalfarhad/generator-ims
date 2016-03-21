import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import {bootstrap} from 'angular2/platform/browser';
import {SeedApp} from './app/seed-app';
bootstrap(SeedApp).catch(err => console.error(err));
