import { EmielkwakkelPage } from './app.po';

describe('emielkwakkel App', function() {
  let page: EmielkwakkelPage;

  beforeEach(() => {
    page = new EmielkwakkelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
