import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Given }) => {

  Given(
    /^I visit the app$/,
    () => {
      browser.url('http://localhost:9000');
    }
  )

  Given(
    /^I see the app$/,
    () => {
      const app = browser.element(`[data-automation='app']`);
      const appVisible = app.isVisible();
      expect(appVisible).toEqual(true);
    }
  );
});