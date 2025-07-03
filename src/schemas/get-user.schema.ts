export const getUserResponseSchema = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    age: { type: 'integer', minimum: 1, maximum: 100 },
    user_id: { type: 'string' }
  },
  required: ['username', 'age', 'user_id']
};

