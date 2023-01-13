export interface Profile {
  name: string;
  picture?: string;
  id: number;
  email: string;
}

export interface ProfileResponse {
  userData: Profile;
}
