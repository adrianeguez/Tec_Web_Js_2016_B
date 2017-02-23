import { AplicacionPruebaPage } from './app.po';

describe('aplicacion-prueba App', () => {
  let page: AplicacionPruebaPage;

  beforeEach(() => {
    page = new AplicacionPruebaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
