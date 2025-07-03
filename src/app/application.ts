import { PageHolder } from './base/pageHolder';
import { Home } from './pages/home.page';
import { SignUp } from './pages/sign-up.page';
import { SignIn } from './pages/sign-in.page';
import { Api } from '../api/api';

export class Application extends PageHolder {
  public homePage = new Home(this.page);
  public signUpPage = new SignUp(this.page);
  public signInPage = new SignIn(this.page);
  public api = new Api(this.page.request);
}
