export interface LoginData {
  login: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface UserData {
  roles: string[];
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  __v: number;
}
