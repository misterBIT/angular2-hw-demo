export class LearnNgcliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('learn-ngcli-app h1')).getText();
  }
}
