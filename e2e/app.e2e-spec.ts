import { ChachaPage } from './app.po';

describe('chacha App', function() {
  let page: ChachaPage;

  beforeEach(() => {
    page = new ChachaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
