import { expect } from '@playwright/test';
import { BasePage } from '../base/basePage';
import { AuthSlider } from '../components/auth-slider.component';

export class SignUp extends BasePage {
  public url = '/en/auth/{accountType}/sign-up';

  public backHomeBtn = this.page.getByRole('link', { name: 'Back to Homepage' });
  public signUpBtn = this.page.getByRole('link', { name: 'Sign Up' });

  public signUpForm = this.page.locator('.auth-content auth-sign-up');
  public signUpFormTitle = this.signUpForm.locator('h1');
  public signUpFormFooter = this.signUpForm.locator('auth-footer');
  public emailInput = this.signUpForm.getByPlaceholder('Enter email');
  public passwordInput = this.signUpForm.getByPlaceholder('Enter password').first();
  public confirmPasswordInput = this.signUpForm.getByPlaceholder('Enter password').last();
  public createAccountBtn = this.signUpForm.getByRole('button', { name: ' Create an account ' });
  public switchToCreateBusinessAccountBtn = this.signUpForm.getByRole('link', {
    name: 'Switch to create Business account',
  });
  public switchToCreatePersonalAccountBtn = this.signUpForm.getByRole('link', {
    name: 'Switch to create Personal account',
  });

  public authSlider = new AuthSlider(this.page);

  /**
   * Verify the sign up form
   * @param {'personal' | 'business'} accountType - The type of account.
   * @returns {Promise<void>} - Return the promise to verify the sign up form.
   */
  async verifySingUpForm(accountType: 'personal' | 'business'): Promise<void> {
    await expect(this.signUpForm).toBeVisible();
    await expect(this.signUpFormTitle).toHaveText(`Create a ${accountType} account`);
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.confirmPasswordInput).toBeVisible();
    await expect(this.createAccountBtn).toBeVisible();
    await expect(this.signUpFormFooter).toBeVisible();

    if (accountType === 'business') {
      await expect(this.switchToCreatePersonalAccountBtn).toBeVisible();
    } else {
      await expect(this.switchToCreateBusinessAccountBtn).toBeVisible();
    }
  }
}
