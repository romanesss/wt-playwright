import { RequestHolder } from './requestHolder';
import { CreateUserRequest } from '../models/user.models';
import { APIResponse } from '@playwright/test';

export class UserController extends RequestHolder {
  private baseApiUrl = 'USE_REAL_API_URL';
  public userRoute = '/api/user';

  /**
   * Method to get user data by user_id.
   * @param {string} userId - The ID of the user to get data for.
   * @returns {APIResponse} - The user data.
   */
  async getUser(userId: string): Promise<APIResponse> {
    const response = await this.request.get(`${this.baseApiUrl}${this.userRoute}/${userId}`);
    return response
  }

  /**
   * Method to create a new user.
   * @param {CreateUserRequest} data - The user data to create.
   * @returns {APIResponse} - The created user data.
   */
  async createUser(data: CreateUserRequest): Promise<APIResponse> {
    if (data.age < 0 || data.age > 100) {
      throw new Error(`Age must be between 0 and 100. Received: ${data.age}`);
    }

    const response = await this.request.post(`${this.baseApiUrl}${this.userRoute}`, {
      data,
    });
    return response
  }
}
