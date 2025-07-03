import { expect } from '../../fixtures/baseFixture';
import { BasePage } from '../base/basePage';

export class SignIn extends BasePage {
  public url = 'https://account.paydo.com/en/auth/{accountType}/sign-in';

  public signInForm = this.page.locator('.auth-content auth-sign-in');
  public emailInput = this.signInForm.getByPlaceholder('Enter email');
  public emailInputError = this.signInForm.locator('.email-field .mat-error');
  public passwordInput = this.signInForm.getByPlaceholder('Enter password');
  public passwordInputError = this.signInForm.locator('.password-field .mat-error');
  public authError = this.signInForm.locator('.ngp-info-block.mat-error');
  public logInBtn = this.signInForm.getByRole('button', { name: 'Log in' });

  async open(accountType: 'personal' | 'business'): Promise<void> {
    await this.page.goto(this.url.replace('{accountType}', accountType));
  }

  /**
   * Login to the account.
   * @param {string} email - The email of the user.
   * @param {string} password - The password of the user.
   * @returns {Promise<void>} - Return the promise to login to the account.
   */
  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.logInBtn.click();
  }

  /**
   * Verify the login error.
   * @returns {Promise<void>} - Return the promise to verify the login error.
   */
  async verifyLoginError(): Promise<void> {
    await expect(this.authError).toHaveText('The email address or password you entered is incorrect');
  }
}
