import { browser, by, element } from 'protractor';

export class AppPage {
  constructor() {
    browser.waitForAngularEnabled(false);
  }
  navigateTo() {
    return browser.get('/');
  }
  getComponents() {
    return document.querySelectorAll('rb-*');
  }
}
