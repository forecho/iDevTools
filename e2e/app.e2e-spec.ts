import { IDevToolsPage } from './app.po';

describe('i-dev-tools App', () => {
  let page: IDevToolsPage;

  beforeEach(() => {
    page = new IDevToolsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
