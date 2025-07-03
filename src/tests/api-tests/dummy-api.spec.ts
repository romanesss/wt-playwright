import { test, expect } from '../../fixtures/baseFixture';
import { postDummyUserResponseSchema } from '../../schemas/post-dummy-user.schema';
import { PostDummyUserResponse } from '../../models/dummy-user.models';

// Extra API tests on real API service DummyAPI.io
test.describe('Dummy API', () => {
  let testUser: PostDummyUserResponse;

  test.beforeEach(async ({ faker, app: { api } }, testInfo) => {
    if (testInfo.title.includes('get user')) {
      testUser = await (
        await api.dummyUserController.createUser({
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
        })
      ).json();
    }
  });

  test('Verify create user', async ({ ajv, faker, app: { api } }) => {
    const response = await api.dummyUserController.createUser({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
    });
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    const validate = ajv.compile(postDummyUserResponseSchema);
    const isValid = validate(responseBody);
    expect(isValid).toBe(true);
  });

  test('Verify get user by id', async ({ ajv, faker, app: { api } }) => {
    const response = await api.dummyUserController.getUserById(testUser.id);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    const validate = ajv.compile(postDummyUserResponseSchema);
    const isValid = validate(responseBody);
    expect(isValid).toBe(true);
  });
});
