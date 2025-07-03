import { test, expect } from '../../fixtures/baseFixture';
import { getUserResponseSchema } from '../../schemas/get-user.schema';
import { postUserResponseSchema } from '../../schemas/post-user.schema';

/**
 * !!! SKIPPED as we don't have a real API for that methods.
 * 3. Write an auto-test to verify the two API methods:
 * 3.1. Get/user - the method by user_id gets data about the user and returns username(str), age(int)[1-100], user_id.
 * 3.2. Post/user: sends username(str), age(int)[1-100], user_type(boolean). The response contains user_id, username.
 */

test.describe.skip('API', () => {
  test('Verify get user by user_id', async ({ ajv, app: { api } }) => {
    const response = await api.userController.getUser('1');
    expect(response.status()).toBe(200);

    const validate = ajv.compile(getUserResponseSchema);
    const isValid = validate(response);
    expect(isValid).toBe(true);
  });

  test('Verify create user', async ({ ajv, app: { api } }) => {
    const response = await api.userController.createUser({
      username: 'test',
      age: 30,
      user_type: true,
    });
    expect(response.status()).toBe(200);

    const validate = ajv.compile(postUserResponseSchema);
    const isValid = validate(response);
    expect(isValid).toBe(true);
  });
});
