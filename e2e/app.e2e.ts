import { LearnNgcliPage } from './app.po';

describe('learn-ngcli App', function() {
  let page: LearnNgcliPage;

  beforeEach(() => {
    page = new LearnNgcliPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('learn-ngcli works!');
  });
});
