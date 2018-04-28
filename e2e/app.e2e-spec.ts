import { NgJwtXamplePage } from './app.po';

describe('ng-jwt-xample App', () => {
  let page: NgJwtXamplePage;

  beforeEach(() => {
    page = new NgJwtXamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
