import { PageHolder } from './pageHolder';

export abstract class BasePage extends PageHolder {
  public abstract url: string;

  public async open(...args: unknown[]): Promise<void> {
    await this.page.goto(this.url);
  }
}
