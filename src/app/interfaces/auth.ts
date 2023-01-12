export interface AuthData {
  email: string;
  password: string;
}

export interface TokenResponse {
  token: string;
}

export interface RegisterData {
  email: string;
  name: string;
  password: string;
  picture?: string;
}
