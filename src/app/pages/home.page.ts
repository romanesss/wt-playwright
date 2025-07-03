import { BasePage } from '../base/basePage';

export class Home extends BasePage {
  public url = '/';
  
  public mainBanner = this.page.locator('.cards-main-baner');
  public openAccountBtn = this.mainBanner.getByRole('link', { name: 'Open Account' });

  /**
   * Open the account.
   * @returns {Promise<void>} - Return the promise to open the account.
   */
  async openAccount(): Promise<void> {
    await this.openAccountBtn.click();
  }
}
