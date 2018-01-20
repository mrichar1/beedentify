import { BeedentifyPage } from './app.po';

describe('beedentify App', () => {
  let page: BeedentifyPage;

  beforeEach(() => {
    page = new BeedentifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Beedentify');
  });
});
