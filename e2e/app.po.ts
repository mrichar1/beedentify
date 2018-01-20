import { browser, by, element } from 'protractor';

export class BeedentifyPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
}
