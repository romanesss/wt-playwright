export const postDummyUserResponseSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    registerDate: { type: 'string' },
  },
  required: ['id', 'firstName', 'lastName', 'email', 'registerDate'],
};
