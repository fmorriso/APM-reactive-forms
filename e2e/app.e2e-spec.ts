import { APMReactiveFormsPage } from './app.po';

describe('apm-reactive-forms App', () => {
  let page: APMReactiveFormsPage;

  beforeEach(() => {
    page = new APMReactiveFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
