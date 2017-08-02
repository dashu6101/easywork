import { EasyworkPage } from './app.po';

describe('easywork App', () => {
  let page: EasyworkPage;

  beforeEach(() => {
    page = new EasyworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
