import { TraderaFrontendTaskPage } from './app.po';

describe('tradera-frontend-task App', () => {
  let page: TraderaFrontendTaskPage;

  beforeEach(() => {
    page = new TraderaFrontendTaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
