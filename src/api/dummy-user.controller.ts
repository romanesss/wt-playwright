import { RequestHolder } from './requestHolder';
import { PostDummyUserRequest, PostDummyUserResponse } from '../models/dummy-user.models';
import { APIResponse } from '@playwright/test';

// Lin to API dock: https://dummyapi.io/docs
export class DummyUserController extends RequestHolder {
  private baseApiUrl = 'https://dummyapi.io/data/v1';
  private apiKey = '640ceaf68678b6e67b16b17f';

  public createUserRoute = '/user/create';
  public userRoute = '/user';

  /**
   * Method to create a new user.
   * @param {CreateUserRequest} data - The user data to create.
   * @returns {APIResponse} - The created user data.
   */
  async createUser(data: PostDummyUserRequest): Promise<APIResponse> {
    const response = await this.request.post(`${this.baseApiUrl}${this.createUserRoute}`, {
      data,
      headers: {
        'app-id': this.apiKey,
      },
    });

    return response;
  }

  /**
   * Method to get user by id.
   * @param {string} userId - The ID of the user to get data for.
   * @returns {APIResponse} - The user data.
   */
  async getUserById(userId: string): Promise<APIResponse> {
    const response = await this.request.get(`${this.baseApiUrl}${this.userRoute}/${userId}`, {
      headers: {
        'app-id': this.apiKey,
      },
    });
    return response;
  }
}
