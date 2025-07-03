export interface PostDummyUserRequest {
  firstName: string;
  lastName: string;
  email: string;
}

export interface PostDummyUserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  registerDate: string;
  updatedDate: string;
  success: boolean;
}
