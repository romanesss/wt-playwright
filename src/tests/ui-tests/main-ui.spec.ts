import { test, expect } from '../../fixtures/baseFixture';

// 1. Open this page https://paydo.com/, click the Open Account button and check for all UI elements.
test.describe('Sign Up page', () => {
  test('Verify that all UI components are visible on Sign Up page', async ({ app: { homePage, signUpPage } }) => {
    await homePage.open();
    await homePage.openAccount();

    await signUpPage.verifySingUpForm('personal');
    await expect(signUpPage.authSlider.component).toBeVisible();
  });
});

// 2. Open the LogIn page, enter invalid data, and check the error message.
test.describe('Log In page', () => {
  test.beforeEach(async ({ app: { signInPage } }) => {
    await signInPage.open('personal');
  });

  test('Verify login with invalid email and password', async ({ page, app: { signInPage }, faker }) => {
    const email = faker.internet.email();
    const password = faker.internet.password();

    await signInPage.login(email, password);
    await signInPage.verifyLoginError();
    await expect(page).toHaveURL(/sign-in/);
  });

  test('Verify login with empty password', async ({ page, app: { signInPage }, faker }) => {
    const email = faker.internet.email();

    await signInPage.emailInput.fill(email);
    await signInPage.passwordInput.click();
    await signInPage.emailInput.click();

    await expect(signInPage.passwordInputError).toHaveText('Please fill in this field to continue');
    await expect(signInPage.logInBtn).toBeDisabled();
  });

  test('Verify login with empty email', async ({ app: { signInPage }, faker }) => {
    const password = faker.internet.password();

    await signInPage.passwordInput.fill(password);
    await signInPage.emailInput.click();
    await signInPage.passwordInput.click();

    await expect(signInPage.emailInputError).toHaveText('Please fill in this field to continue');
    await expect(signInPage.logInBtn).toBeDisabled();
  });

  test('Verify login with empty email and password', async ({ page, app: { signInPage }, faker }) => {
    await signInPage.passwordInput.click();
    await signInPage.emailInput.click();
    await signInPage.passwordInput.click();

    await expect(signInPage.passwordInputError).toHaveText('Please fill in this field to continue');
    await expect(signInPage.emailInputError).toHaveText('Please fill in this field to continue');
    await expect(signInPage.logInBtn).toBeDisabled();
  });
});
