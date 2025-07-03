export const postUserResponseSchema = {
  type: 'object',
  properties: {
    user_id: { type: 'string' },
    username: { type: 'string' },
  },
  required: ['user_id', 'username'],
};
