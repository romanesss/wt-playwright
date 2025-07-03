export interface GetUserResponse {
  username: string;
  age: number;
  user_id: string;
}

export interface CreateUserRequest {
  username: string;
  age: number;
  user_type: boolean;
}

export interface CreateUserResponse {
  user_id: string;
  username: string;
}
